import React from 'react'
import Image from 'next/image'
import techBg from '@/public/tech-bg.png'
import uiux from '@/public/uiux.png'
import web from '@/public/web.png'
import mobile from '@/public/mobile.png'
import software from '@/public/software.png'
import backend from '@/public/backend.jpg'
import cyber from '@/public/cyber.png'
import corp from '@/public/more-corp.png'
import business from '@/public/more-bus.png'
import kids from '@/public/more-kids.png'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Academy() {
  return (
    <div className="text-base xl:text-lg relative">
      <section className=" relative hero-img">
        <Image
          src={techBg}
          alt="tech2jobs page background image"
          className=" w-full h-96 object-cover relative"
        /> 
        <div className=" text-white-10 absolute left-0 right-0 z-30 m-auto top-0 bottom-0 px-5 lg:px-16 flex flex-col items-center justify-center max-w-[700px] text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Academy</h2>
          <p className=" capitalize mt-5">
          Learning on your own falls short for so many people. That’s why Max Academy surrounds you with a circle of human support proven to help guide you through your learning journey.
          </p>
        </div>
      </section>


      <section className=" px-5 lg:px-16 py-24">
        <div className=' text-center'>
            <h2 className=' lg:text-5xl md:text-4xl text-2xl font-medium leading-snug'>Courses that we offer</h2>
            <p>Offer some wide varieties of courses</p>
        </div>

        <div className=' flex justify-center md:justify-between flex-wrap gap-y-10 mt-20'>
            <div className='  border border-lightGray-10 p-4  max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={uiux} alt='ui/ux image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                    <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Product Design (UI/UX)</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                    </ul>
                    <p className=' text-base pt-2'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦150,000</p>
                        <Link href={"/academy/product-design"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='  border border-lightGray-10 p-4 max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={web} alt='frontend development image' className=' w-full h-[280px]'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                    <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Frontend Development</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                    </ul>
                    <p className=' text-base pt-2'>This course covers JavaScript, working with APIs and a JavaScript library e.g. React</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦150,000</p>
                        <Link href={"/academy/frontend-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='  border border-lightGray-10 p-4 max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={backend} alt='backend development image' className=' w-full h-[280px]   '/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                    <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Backend Development</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                    </ul>
                    <p className=' text-base pt-2'>This course covers JavaScript, working with APIs and a JavaScript library e.g. React.</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦150,000</p>
                        <Link href={"/academy/backend-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='  border border-lightGray-10 p-4 max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={mobile} alt='mobile development image ' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                    <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Mobile Development</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                    </ul>
                    <p className=' text-base pt-2'>This course introduces you to the fundamentals of React Native whileyoubuild and publish a portfolio of applications on Google play store andAppstore.</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦200,000</p>
                        <Link href={"/academy/mobile-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='  border border-lightGray-10 p-4 max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={software} alt='fullstack development image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                    <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Fullstack Development</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                    </ul>
                    <p className=' text-base pt-2'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦200,000</p>
                        <Link href={"/academy/fullstack-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='  border border-lightGray-10 p-4 max-w-[380px] md:max-w-[48%] lg:max-w-[31%]'>
                <Image src={cyber} alt='data science image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className='ml-6 product-head '>
                            <h3 className=' text-lg font-medium max-w-[70%]'>Data Science</h3>
                            <span className=' absolute top-0 bottom-0 flex items-center right-0 font-medium text-base'>3 months</span>
                        </li>
                        
                    </ul>
                    <p className=' text-base pt-2'>This course covers the fundamentals of Version Control, Python programming, SQL, Statistics and data science.</p>
                    <div className=' flex justify-between items-center pt-8'>
                        <p className=' font-medium text-lg'>₦150,000</p>
                        <Link href={"/academy/data-science"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}
