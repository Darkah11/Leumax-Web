"use client"
import React from 'react'
import Button from '@/components/Button'

export default function ProgramForm(props) {

    const courses = props.courses
    const price = props.price

  return (
    <div className=' pt-16'>
            <h3 className=" text-2xl font-medium pb-2">Register, We’ve Helped Thousands Of Grads Go From Beginner To Pro.</h3>
            <p className='text-lg font-medium pb-5'>Price : {price}</p>
            <form className=" w-full">
              <div className=" flex flex-col gap-8 mt-1">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  name="email"
                  id="email"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  name="email"
                  id="email"
                  className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
                />
                <select name='Gender' className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Select Gender</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
            </select>

              {courses && 
              <select name='Course' className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
              <option className=' text-gray-300'>Select a course</option>
              {courses && courses.map((course, index) => {
                  return (
                      <option value={course} key={index}>
                          {course}
                      </option>
                  );
              })}
          </select>}
                
                <select name='Training mode' className=" w-full border border-gray-300 p-2 outline-none rounded-lg te">
                <option className=' text-gray-300'>Training Mode</option>
                <option value="Online">Online</option>
                <option value="Offline" >Offline</option>
            </select>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className=" w-full border border-gray-300 rounded-lg p-2 min-h-[200px] outline-none"
                ></textarea>
                <Button
                  title={'Get a quote'}
                  type={'submit'}
                  variant={'btn-orange w-[200px] ml-auto'}
                />
              </div>
            </form>
          </div>
  )
}
