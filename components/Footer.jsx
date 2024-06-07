import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'


export default function Footer() {
  return (
    <footer className=" bg-black-10 text-white-10 px-16">
      <div className=" flex flex-col justify-center items-center  py-24">
        <h2 className=" text-center text-5xl mb-10 leading-snug">
          Have A Project In Mind?
          <br />
          Let’s Work Together
        </h2>
        <Button
          title={'Request Quote'}
          variant={'btn-orange'}
          type={'button'}
        />
      </div>

      <div className=' border-y py-10 flex items-start gap-20'>

        <div className=' max-w-sm'>
          <Link href={'/'}>
            <Image src={logo} width={200} height={50} alt="leumax log" />
          </Link>
          <p className=' text-lg mt-5 text-gray-10'>
            Leumax Technology is a dedicated team passionate about bridging the
            gap between technology and education.
          </p>
        </div>

        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Company</p>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Portfolio</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10 '>
            <p className=' mb-5 text-white-10 font-medium'>Max Academy</p>
            <Link href={"/"}>Kids2tech</Link>
            <Link href={"/"}>Tech4japa</Link>
            <Link href={"/"}>Tech4jobs</Link>
            <Link href={"/"}>Corps2tech</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Support</p>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Term of use</Link>
            <Link href={"/"}>Cookie policy</Link>
        </ul>
        <ul className=' flex items-left gap-4 flex-col text-gray-10'>
            <p className=' mb-5 text-white-10 font-medium'>Media</p>
            <Link href={"/"}>Twitter</Link>
            <Link href={"/"}>LinkedIn</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Facebook</Link>
        </ul>
      </div>
      <p className=' text-center py-10'>Copyright © 2023 Leumax Technology. All Rights Reserved by Leumax Technology</p>
    </footer>
  )
}
