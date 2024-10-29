import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-4 md:mt-10 h-screen'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
        <h2 className='text-[35px] md:text-[70px] text-primary font-bold md:font-extrabold py-4 md:py-10'>Create Magical Stories For Kids In Minutes</h2>
        <p className='text-1xl md:text-2xl text-primary font-light'>Create fun and personalised stories that bring your child's/sibling's adventures to life and spark their passion for reading.It only takes a few seconds!</p>
        <Link href={'/create-story'}>
          <Button size='lg' color='primary' className='mt-3 md:mt-5 font-bold text-lg md:text-2xl p-4 md:p-8'>Create Story</Button>
        </Link>
        </div>
        <div>
          <Image src={'/hero.png'} alt='hero' width={700} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Hero
