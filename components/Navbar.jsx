import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.png'
import arrow from '@/public/arrow-down.svg'
import Button from './Button'

export default function Navbar() {
  return (
    <>
    <nav className=' flex-between px-16 py-4'>
      <Link href={"/"}>
        <Image src={logo} width={200} height={50} alt='leumax log'/>
      </Link>

        <ul className=' flex-between gap-4 text-lg font-medium'>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/about"}>About Us</Link></li>
          {/* <li><Link href={"/"}>Services</Link></li> */}
          <li><Link href={"/iot"}>IoT</Link></li>
          <li>
            <div className=' relative group'>
              <Link href={"/max-academy"} className=' flex-between'>
              <p>Max Academy</p>  
              <Image src={arrow} alt='arrow down' width={24} height={24}/>
              </Link>
              <div className=' hidden flex-col items-start gap-y-2 absolute top-7 z-10 group-hover:flex 
              bg-white-10 px-4 py-2 shadow-lg'>
                <Link href={"/tech2jobs"}>Tech2jobs</Link>
                <Link href={"/"}>Tech2kids</Link>
                <Link href={"/"}>Corps2tech</Link>
                <Link href={"/"}>Tech2business</Link>
              </div>
            </div>
          </li>
        </ul>

        <Link href={"/contact"}>
        <Button type={"button"} title={'Contact us'} 
        variant={" btn-orange"}/>
        </Link>
        
    </nav>
    </>
  )
}
