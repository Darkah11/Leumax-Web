import React from 'react'
import Button from '@/components/Button'

export default function QuoteForm() {
  return (
    <div className=' pt-16'>
            <h3 className=" text-3xl font-medium pb-10">Request a quote</h3>
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
                {/* <select>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select> */}
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
