'use client'
import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'
import { chatSession } from '@/config/GeminiAi'
import { StoryData } from '@/config/schema'
import { db } from '@/config/db'
// @ts-ignore
import uuid4 from "uuid4";
import CustomLoader from './_components/CustomLoader'
import axios from 'axios'

const CREATE_STORY_PROMPT=process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData{
  fieldName: string,
  fieldValue: string
}

export interface formDataType{
  storySubject: string,
  storyType: string,
  ageGroup: string,
  imageStyle: string
}

function CreateStory() {

  const [formData, setFormData] = useState<formDataType>()
  const [loading, setLoading] = useState(false)

  /**
   * used to add data to form
   * @param data 
   * 
   */

  const onHandleUserSelection=(data: fieldData) => {
    setFormData((prev:any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }));

    console.log(formData)
  }

  const GenerateStory = async () => {
    setLoading(true)
    const FINAL_PROMPT=CREATE_STORY_PROMPT
    ?.replace('{ageGroup}', formData?.ageGroup??'')
    .replace('{storyType}', formData?.storyType??'')
    .replace('{imageStyle}', formData?.imageStyle??'')
    .replace('{storySubject}', formData?.storySubject??'')
    // generate AI story
    try {
      // console.log(FINAL_PROMPT);

      
      const result = await chatSession.sendMessage(FINAL_PROMPT)
      const story = JSON.parse(result?.response.text())
      console.log(result?.response.text());
      const imageResp = await axios.post('/api/generate-image', {
        prompt: 'Add text with title:'+story?.story_name+" in bold text for book cover, "+story?.cover_image?.description
      });

      console.log(imageResp?.data);
      
      // const resp = await saveInDB(result?.response.text())
      // console.log(resp)
      setLoading(false)
      
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
    // save in db

    // generate the image
  }

  const saveInDB = async (output:string) => {
    const recordId = uuid4();
    setLoading(true)
    try {
      const result = await db.insert(StoryData).values({
        storyId: recordId,
        ageGroup: formData?.ageGroup,
        imageType: formData?.imageStyle,
        storySubject: formData?.storySubject,
        storyType: formData?.storyType,
        output: JSON.parse(output)
      }).returning({storyId: StoryData?.storyId})
      setLoading(false)
      return result;
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }

  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[30px] md:text-[70px] text-primary text-center'>CREATE YOUR STORY</h2>

      <p className='text-1xl md:text-2xl text-primary text-center'>With the power of our AI, create stories like never before. Watch as your ideas turn into amazing adventures, one story at a time.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        {/* story subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* story type */}
        <StoryType userSelection={onHandleUserSelection} />

        {/* age group */}
        <AgeGroup userSelection={onHandleUserSelection} />

        {/* image style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      <div className='flex justify-center md:justify-end my-10'>
        <Button disabled={loading} onClick={GenerateStory} className='p-10 text-2xl' color='primary'>Generate Story</Button>
      </div>

      <CustomLoader isLoading={loading} />
    </div>
  )
}

export default CreateStory
