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
      <nav className=" flex-between px-5 h-[70px] lg:px-16 py-4 md:text-xs lg:text-base fixed z-50 bg-white-10 w-full shadow-lg">
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
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/programs"}>Programs</Link>
          </li>
          <li>
            <Link href={'/about'}>About Us</Link>
          </li>
          <li>
            <Link href={'/iot'}>IoT</Link>
          </li>
          <li>
            <Link href={'/products'}>Products</Link>
          </li>
          <li>
              <Link href={'/academy'}>Academy</Link>
          </li>
        </ul>

        <Link href={'/contact'} className=" hidden md:flex text-xs">
          <Button
            type={'button'}
            title={'Contact us'}
            variant={' btn-orange text-xs lg:text-base'}
          />
        </Link>

        <ul
          className={` ${
            isOpen ? ' flex' : ' hidden'
          } absolute top-[70px] bg-white-10 w-full left-0  flex-col items-center z-50 md:hidden`}
        >
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/'} onClick={() => handleOpen(!isOpen)}>
              Home
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/services'} onClick={() => handleOpen(!isOpen)}>
              Services
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/programs'} onClick={() => handleOpen(!isOpen)}>
              Programs
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/about'} onClick={() => handleOpen(!isOpen)}>
              About Us
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/iot'} onClick={() => handleOpen(!isOpen)}>
              IoT
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/products'} onClick={() => handleOpen(!isOpen)}>
              Products
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/academy'} onClick={() => handleOpen(!isOpen)}>
              Academy
            </Link>
          </li>
          <li className=" border-b border-gray-10 w-full text-center">
            <Link className=" py-3 block" href={'/contact'} 
            onClick={() => handleOpen(!isOpen)}>
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
