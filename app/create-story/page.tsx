'use client'
import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'

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

  /**
   * used to add data to form
   * @param data 
   * 
   */

  const onHandleUserSelection=(data: fieldData) => {
    // console.log(data)
    // if(formData?.storySubject||formData?.ageGroup||formData?.storyType||formData?.imageStyle){
      
    // }
    setFormData((prev:any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }));

    console.log(formData)
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
        <Button className='p-10 text-2xl' color='primary'>Generate Story</Button>
      </div>
    </div>
  )
}

export default CreateStory
