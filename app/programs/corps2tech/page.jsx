import React from 'react'
import Image from 'next/image'
import techBg from '@/public/tech-bg.png'
import uiux from '@/public/uiux.png'
import web from '@/public/web.png'
import mobile from '@/public/mobile.png'
import software from '@/public/software.png'
import digital from '@/public/digital.png'
import cyber from '@/public/cyber.png'
import jobs from '@/public/more-jobs.png'
import business from '@/public/more-bus.png'
import kids from '@/public/more-kids.png'
import Button from '@/components/Button'
import Link from 'next/link'
import 'animate.css';

export default function Corps2Tech() {
  return (
    <main className="text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={techBg}
          alt="tech2jobs page background image"
          className=" w-full h-96 object-cover relative"
        />
        <div className=" animate__animated animate__slideInLeft text-white-10 absolute left-0 right-0 m-auto z-30 top-0 bottom-0 px-5 lg:px-16 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Corps2Tech</h2>
        </div>
      </section>

      <section className=" animate__animated animate__fadeIn px-5 lg:px-16 py-24 max-w-[700px]  m-auto">
        <div>
          <h2 className=" text-2xl md:text-3xl md font-medium border-b pb-2 border-b-lightGray-10">
            Corps2Tech
          </h2>
          <p className=" pt-10">
          Corp2tech is tech educational programme for the corp members serving in the federation. Our goal is to create an insight avenue for the graduates interested in a technical skill and help bridge the employability gap in the country.
          </p>
        </div>
        <div className=' pt-10'>
            <h3 className=' font-medium text-xl border-b pb-2'>Choose a course</h3>
            <ul className=' list-disc ml-5 flex flex-col gap-y-3 mt-4'>
                <div>
                  <li><h4 className=' font-medium'>Front End Development</h4></li>
                  <span className=' text-darkgray-10 text-sm'>HTML5, CSS3, Bootstrap 5, JavaScript, ReactJS, Git, Docker, CPanel.</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Back End Development</h4></li>
                  <span className=' text-darkgray-10 text-sm'>JavaScript, Python, Nodejs, PHP, SQL, MongoDB, Git, Docker.</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Data Analytics</h4></li>
                  <span className=' text-darkgray-10 text-sm'>Python, Excel, Tableua, PowerBi, SQL.</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Mobile Development</h4></li>
                  <span className=' text-darkgray-10 text-sm'>UI Design, Dart, Flutter, JavaScript, SQL, MongoDB, Git.</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Digital Marketing</h4></li>
                  <span className=' text-darkgray-10 text-sm'>SEO, SEM, Social Media Marketing, Email Marketing, Phone Marketing, Content Marketing (Video, Graphics).</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Cyber Security</h4></li>
                  <span className=' text-darkgray-10 text-sm'>Metasploit framework, Kali Linux Os, Parrot OS, Nmap, Wireshark, Kali Linux, Firewalls, Metasploit, Parrot os, Nmap, kali Linux</span>
                </div>
                <div>
                  <li><h4 className=' font-medium'>Software Development</h4></li>
                  <span className=' text-darkgray-10 text-sm'>Java, JavaScript, Python, Google Material.</span>
                </div>
            </ul>
        </div>
      </section>

      <section className=" px-5 lg:px-16 py-24">
        <h2 className=' lg:text-4xl md:text-3xl text-2xl text-center md:text-left font-medium leading-snug'>More on Leumax Programs:</h2>
        <div className=' flex justify-center lg:justify-between gap-y-5 gap-x-5 lg:gap-x-0 items-center flex-wrap mt-10'>
            <Link href={'/programs/tech2jobs'} className=' max-w-[400px] md:max-w-[31%] relative'>
                <Image src={jobs} alt='tech2jobs image' className=' w-full'/>
                <div className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'> <p>Tech2Jobs </p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
            <Link href={'/programs/tech2business'} className=' max-w-[400px] md:max-w-[31%] relative'>
                <Image src={business} alt='corps image' className=' w-full'/>
                <div className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'><p>Tech2Business</p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
            <Link href={'/programs/tech2kids'} className=' max-w-[400px] md:max-w-[31%] relative'>
                <Image src={kids} alt='corps image' className=' w-full'/>
                <div className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'><p>Tech2Kids </p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </div>
            </Link>
        </div>
      </section>
    </main>
  )
}
