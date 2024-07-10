import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/Logo.png'


export default function Footer() {
  return (
    <footer className=" bg-black-10 text-white-10 px-5 lg:px-16">
      <div className=" flex flex-col justify-center items-center py-24">
        <h2 className=" text-center lg:text-5xl md:text-4xl font-medium lg:pt-20 leading-normal text-2xl mb-10">
          Have A Project In Mind?
          <br />
          Let’s Work Together
        </h2>
        <Link href={'/contact'}>
            <Button
              title={'Request Quote'}
              variant={'btn-orange'}
              type={'button'}
            />
            </Link>
      </div>

      <div className=' border-y py-10 flex items-start flex-wrap gap-20'>

        <div className=' max-w-sm'>
          <Link href={'/'}>
            <Image src={logo} width={200} height={50} alt="leumax log" />
          </Link>
          <p className=' text-lg mt-5 text-gray-10'>
            Leumax Technology is a dedicated team passionate about bridging the
            gap between technology and education.
          </p>
        </div>

        <div className=' flex gap-20 items-center flex-wrap'>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Company</p>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Home</Link>
            <Link href={"/about"} className=' hover:text-orange-10 transition-all'>About us</Link>
            <Link href={"/services"} className=' hover:text-orange-10 transition-all'>Services</Link>
            <Link href={"/academy"} className=' hover:text-orange-10 transition-all'>Academy</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10 '>
            <p className=' mb-5 text-white-10 font-medium'>Programs</p>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Kids2tech</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Tech4japa</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Tech4jobs</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Corps2tech</Link>
        </ul>
        </div>
        <div className=' flex gap-20 items-center flex-wrap'>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Support</p>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>FAQs</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Contact</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Term of use</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Cookie policy</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Media</p>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Twitter</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>LinkedIn</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Instagram</Link>
            <Link href={"/"} className=' hover:text-orange-10 transition-all'>Facebook</Link>
        </ul>
        </div>

        
      </div>
      <p className=' text-center py-10'>Copyright © 2023 Leumax Technology. All Rights Reserved by Leumax Technology</p>
    </footer>
  )
}
