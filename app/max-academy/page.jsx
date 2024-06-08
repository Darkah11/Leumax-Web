import React from 'react'
import Image from 'next/image'
import maxAcademy from '@/public/max-academy.png'
import tech2jobs from '@/public/tech2jobs.png'
import tech2kids from '@/public/tech2kids.png'
import corps2tech from '@/public/corps2tech.png'
import tech2bus from '@/public/tech2bus.png'
import team1 from '@/public/team1.png'
import team2 from '@/public/team2.png'
import team3 from '@/public/team3.png'
import twitter from '@/public/twitter.svg'
import linkedin from '@/public/linkedin.svg'
import Button from '@/components/Button'
import Link from 'next/link'

export default function MaxAcademy() {
  return (
    <main className=" text-base lg:text-lg xl:text-xl relative">
        <section className=" relative">
        <Image
          src={maxAcademy}
          alt="max academy page background image"
          className=" w-full h-screen object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 px-5 lg:px-16 py-24 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" lg:text-6xl md:text-5xl font-medium lg:pt-20 leading-normal text-4xl">Max Academy</h2>
          <p className=" capitalize mt-5">
          For more information about our courses, get in touchwith Leumax Technology contacts
          </p>
        </div>
      </section>

      <section className=" px-5 lg:px-16 py-24 ">
        <div className=' flex flex-col md:flex-row md:items-center md:justify-between'>
            <h2 className='  lg:text-5xl md:text-4xl text-2xl font-medium leading-snug'>Explore our training programme</h2>
            <p className=' max-w-[500px] pt-4'>We have years of experience and hands-on you can bank on. We develop Solutions and Tools to ease your business process via the web. </p>
        </div>


        <div className=' mt-24 max-w-[1000px] m-auto flex flex-col gap-24'>

          <div className=' flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0'>
            <Image src={tech2jobs} alt=' working man image' className=' md:w-[40%]'/>
            <div className=' max-w-[500px] mt-8 md:mt-0'>
              <h3 className=' text-3xl font-medium'>Tech2jobs</h3>
              <p className=' pt-4 pb-8'>IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance.</p>
              <Link href={"/tech2jobs"}>
              <Button title={"Learn more"} variant={"btn-orange"} type={"button"} />
              </Link>
            </div>
          </div>
          
          <div className=' flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0'>
            <Image src={tech2kids} alt=' kids image' className=' md:w-[40%]'/>
            <div className=' max-w-[500px] mt-8 md:mt-0'>
              <h3 className=' text-3xl font-medium'>Tech2kids</h3>
              <p className=' pt-4 pb-8'>IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance.</p>
              <Link href={"/tech2jobs"}>
              <Button title={"Learn more"} variant={"btn-orange"} type={"button"} />
              </Link>
            </div>
          </div>
          <div className=' flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0'>
            <Image src={corps2tech} alt=' corps image' className=' md:w-[40%]'/>
            <div className=' max-w-[500px] mt-8 md:mt-0'>
              <h3 className=' text-3xl font-medium'>Corps2tech</h3>
              <p className=' pt-4 pb-8'>IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance.</p>
              <Link href={"/tech2jobs"}>
              <Button title={"Learn more"} variant={"btn-orange"} type={"button"} />
              </Link>
            </div>
          </div>
          <div className=' flex flex-col md:flex-row items-center justify-between md:gap-x-5 lg:gap-x-0'>
            <Image src={tech2bus} alt=' woman image' className=' md:w-[40%]'/>
            <div className=' max-w-[500px] mt-8 md:mt-0'>
              <h3 className=' text-3xl font-medium'>Tech2business</h3>
              <p className=' pt-4 pb-8'>IoT is the most used technology nowadays. Whether a kitchen appliance or security monitor, IoT allows you to connect objects to the networks through embedded devices. Now, communication between processes, people, and things is possible without any hindrance.</p>
              <Link href={"/tech2jobs"}>
              <Button title={"Learn more"} variant={"btn-orange"} type={"button"} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className=" px-16 py-24">
        <div className=' max-w-[700px] m-auto text-center '>
            <h2 className=' lg:text-5xl md:text-4xl text-2xl font-medium leading-snug pb-4'>Our Trained Alumni</h2>
            <p>Dive into success stories as we proudly showcase our trained alumni, a testament to the transformative power of Leumax Technology's courses</p>
        </div>
        <div className=' flex justify-center lg:justify-between gap-x-5 lg:gap-x-0 items center flex-wrap gap-y-10 mt-12'>

            <div className=' relative max-w-[380px]'>
            <Image src={team1} alt="our team member's image" className=' w-full'/>
            <div className=' absolute bottom-8 left-0 right-0 m-auto 
            w-[90%] flex items-center justify-between bg-black-10 bg-opacity-70 px-4 py-2 border border-darkgray-10'>
                <div className=' text-white-10 '>
                    <p className=' text-lg font-semibold'>Adetogun Sam</p>
                    <p className=' text-sm'> Founder, Leumax Tech</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <Image src={twitter} alt='twitter logo'/>
                    <Image src={linkedin} alt='linkedin logo'/>
                </div>
            </div>
            </div>

            <div className=' relative max-w-[380px]'>
            <Image src={team2} alt="our team member's image" className=' w-full'/>
            <div className=' absolute bottom-8 left-0 right-0 m-auto 
            w-[90%] flex items-center justify-between bg-black-10 bg-opacity-70 px-4 py-2 border border-darkgray-10'>
                <div className=' text-white-10 '>
                    <p className=' text-lg font-semibold'>Adetogun Sam</p>
                    <p className=' text-sm'> Founder, Leumax Tech</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <Image src={twitter} alt='twitter logo'/>
                    <Image src={linkedin} alt='linkedin logo'/>
                </div>
            </div>
            </div>

            <div className=' relative max-w-[380px]'>
            <Image src={team3} alt="our team member's image" className=' w-full'/>
            <div className=' absolute bottom-8 left-0 right-0 m-auto 
            w-[90%] flex items-center justify-between bg-black-10 bg-opacity-70 px-4 py-2 border border-darkgray-10'>
                <div className=' text-white-10 '>
                    <p className=' text-lg font-semibold'>Adetogun Sam</p>
                    <p className=' text-sm'> Founder, Leumax Tech</p>
                </div>
                <div className=' flex items-center gap-4'>
                    <Image src={twitter} alt='twitter logo'/>
                    <Image src={linkedin} alt='linkedin logo'/>
                </div>
            </div>
            </div>

        </div>
      </section>
    </main>
  )
}
