'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import arrow from '@/public/arrow-down.svg'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleOpen = (openValue) => {
    setIsOpen(openValue)
  }

  return (
    <>
      <nav className=" flex-between px-5 lg:px-16 py-4 text-base md:text-base lg:text-lg relative">
        <Link href={'/'}>
          <Image
            src={logo}
            width={200}
            height={50}
            alt="leumax log"
            className=" w-[150px]"
          />
        </Link>

        <button
          onClick={() => handleOpen(!isOpen)}
          className=" flex flex-col items-center gap-y-2 w-[30px] cursor-pointer md:hidden"
        >
          <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
          <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
          <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
        </button>

        <ul className="hidden md:flex-between gap-4 font-medium">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About Us</Link>
          </li>
          {/* <li><Link href={"/"}>Services</Link></li> */}
          <li>
            <Link href={'/iot'}>IoT</Link>
          </li>
          <li>
            <div className=" relative group">
              <Link href={'/max-academy'} className=" flex-between">
                <p>Max Academy</p>
                <Image src={arrow} alt="arrow down" width={24} height={24} />
              </Link>
              <div
                className=" hidden flex-col items-start gap-y-2 absolute top-7 z-10 group-hover:flex 
              bg-white-10 px-4 py-2 shadow-lg"
              >
                <Link href={'/tech2jobs'}>Tech2jobs</Link>
                <Link href={'/'}>Tech2kids</Link>
                <Link href={'/'}>Corps2tech</Link>
                <Link href={'/'}>Tech2business</Link>
              </div>
            </div>
          </li>
        </ul>

        <Link href={'/contact'} className=" hidden md:flex">
          <Button
            type={'button'}
            title={'Contact us'}
            variant={' btn-orange'}
          />
        </Link>

        <ul
          className={` ${
            isOpen ? ' flex' : ' hidden'
          } absolute top-[70px] bg-white-10 w-full left-0  flex-col items-center z-50 md:hidden`}
        >
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/'}>
              Home
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/about'}>
              About Us
            </Link>
          </li>
          {/* <li><Link href={"/"}>Services</Link></li> */}
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/iot'}>
              IoT
            </Link>
          </li>
         
          <li className=" border-b border-gray-10 w-full text-center">
            <div className=" relative group">
              <Link
                href={'/max-academy'}
                className=" py-3 flex justify-center items-center text-cent"
              >
                <p>Max Academy</p>
                <Image
                  src={arrow}
                  alt="arrow down"
                  width={24}
                  height={24}
                  className=" inline"
                />
              </Link>
              <div
                className=" hidden flex-col items-center relative top-1 z-10 group-hover:flex 
              bg-white-10"
              >
                <Link
                  className=" py-3 block w-full border-b border-gray-10"
                  href={'/tech2jobs'}
                >
                  Tech2jobs
                </Link>
                <Link
                  className=" py-3 block w-full border-b border-gray-10"
                  href={'/'}
                >
                  Tech2kids
                </Link>
                <Link
                  className=" py-3 block w-full border-b border-gray-10"
                  href={'/'}
                >
                  Corps2tech
                </Link>
                <Link
                  className=" py-3 block w-full border-b border-gray-10"
                  href={'/'}
                >
                  Tech2business
                </Link>
              </div>
            </div>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/iot'}>
            <Button
                type={'button'}
                title={'Contact us'}
                variant={' btn-orange'}
              />
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  )
}
