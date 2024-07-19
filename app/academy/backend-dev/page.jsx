import React from 'react'
import Image from 'next/image'
import hero from '@/public/academy/back-dev-bg.jpg'
import clock from '@/public/clock.svg'
import mark from '@/public/mark.png'
import QuoteForm from '@/components/QuoteForm'

export default function BackendDev() {
  return (
    <div className=" text-base lg:text-lg xl:text-xl relative">
      <section className=" relative hero-img">
        <Image
          src={hero}
          alt="web development page background image"
          className="w-full h-96 object-cover relative"
        />
        <div className=" text-white-10 px-5 lg:px-16 absolute z-30 left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center  text-center">
          <h2 className=" lg:text-5xl md:text-4xl font-medium leading-normal text-3xl">Backend Development</h2>
          <p className=" mt-5 max-w-[600px]">
          This course covers Node Js, working with server side logic and databases
          </p>
        </div>
      </section>


      <section className="px-5 lg:px-16 py-24">
        <div className=' max-w-[850px] m-auto'>
          <div>
            <h2 className=' text-2xl md:text-3xl font-medium border-b pb-2 border-b-lightGray-10'>Backend development</h2>
            <p className=' pt-5'>
              Backend development focuses on building the server-side logic, databases and other components that enable the functioning of websites, web applications and software systems. Backend developers work with programming languages, frameworks to create the server-side infrastructure that powers the frontend and manages data processing, business logic, security and integrations
            </p>
          </div>


          <div className=' pt-10'>
            <h3 className=' font-medium text-xl border-b pb-2'>Courses</h3>
            <ul className=' flex flex-col gap-y-3 mt-4'>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Web APIs and Asynchronous Applications</h4>
                        <span className=' text-darkgray-10 text-sm'>HTTP Request and Routes, Asynchronous Javascript.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Object Oriented JavaScript</h4>
                        <span className=' text-darkgray-10 text-sm'>Objects in Depth, Functions at Runtime, Classes and Objects, Object Oriented Design Patterns.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Backend Development with Node.js</h4>
                        <span className=' text-darkgray-10 text-sm'>Getting started with Node.js, Developing with Typescript, Unit testing with Jasmine, Building a Server.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Creating an API with with PostgreSQL/MongoDB and Express</h4>
                        <span className=' text-darkgray-10 text-sm'>Databases and SQL, Creating an API with Postgres connection, Creating an API with Express, Authentication and Authorization, SQL for advanced API functionality, MongoDB and Mongoose ODM</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Deployment Process</h4>
                        <span className=' text-darkgray-10 text-sm'>Setting up a Production Environment, Interact with Cloud Services, Write Scripts for Web Application, Configure and document a pipeline, deploy backends with Heroku.</span>
                      </div>
                  </li>
                  <li className=' flex items-start gap-x-3'>
                      <Image src={mark} alt='a mark image' className=' w-[20px] h-[20px]'/>
                      <div>
                        <h4 className=' font-medium'>Projects & Career Support</h4>
                        <span className=' text-darkgray-10 text-sm'>Personal project. Inter-track project. Client Project. Career profile review.</span>
                      </div>
                  </li>
             </ul>
            <div className=' pt-16'>
              <h5 className=' font-medium text-xl border-b pb-2'>Duration</h5>
              <div className=' flex items-center gap-x-2 pt-5'>
                <Image src={clock} alt=' clock image' className=' w-7 h-7'/>
              <p>The program is set to run for 3 months.</p>
              </div>
              
            </div>
        </div>
        <div className=' md:py-12 py-8 md:px-10 px-5 rounded-lg price-card text-white-10 mt-12'>
          <h3 className=' md:text-2xl text-lg  font-medium'>Full Tuition Option</h3>
          <h2 className=' md:text-5xl text-3xl font-medium py-3'>₦150,000</h2>
          <p>Pay your fees 100% upfront. No other charges come up during your learning.</p>
        </div>
        

          <QuoteForm course={"Backend Development"} />
        </div>
      </section>
    </div>
  )
}
