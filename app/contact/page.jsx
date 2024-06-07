import React from 'react'
import Image from 'next/image'
import contactImg from '@/public/contact-us.png'
import phone from '@/public/phone.svg'
import mail from '@/public/mail.svg'
import location from '@/public/location.svg'
import Button from '@/components/Button'
import map from '@/public/map.png'

export default function ContactUs() {
  return (
    <main className=" text-lg">
      <section className=" relative">
        <Image
          src={contactImg}
          alt="contact page background image"
          className=" w-full h-screen object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center max-w-[500px] text-center">
          <h2 className=" text-5xl">Contact Us</h2>
          <p className=" mt-5">
            For more information about our courses, get in touchwith Leumax
            Technology contacts
          </p>
        </div>
      </section>

      <section className=" px-16 py-24 ">
        <div className=' flex justify-between gap-20 contact-form relative'>
          <div className=" flex flex-col gap-12 w-full ">
            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={phone} alt="phone icon" />
                <p className=" font-medium text-xl">Phone</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>234 - 810 - 000 - 0000</span>
              </p>
            </div>

            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={mail} alt="mail icon" />
                <p className=" font-medium text-xl">E-mail</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>Leumaxtech@gmail.com</span>
              </p>
            </div>

            <div>
              <div className=" flex items-center gap-2 mb-1">
                <Image src={location} alt="location icon" />
                <p className=" font-medium text-xl">Location</p>
              </div>
              <p className=" w-full border border-bg-lightGray-10-10 px-2 py-2 text-base">
                <span>1B Birrel Avenue, Yaba, Lagos</span>
              </p>
            </div>
          </div>


          <form className=" w-full">
            <label className=" font-medium text-xl">Send us message</label>
            <div className=" flex flex-col gap-8 mt-1">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className=" w-full border border-lightGray-10 p-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className=" w-full border border-lightGray-10 p-2 outline-none"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className=" w-full border border-lightGray-10 p-2 min-h-[200px] outline-none"
              ></textarea>
              <Button
                title={'Send Message'}
                type={'submit'}
                variant={'btn-orange w-[200px] ml-auto'}
              />
            </div>
          </form>
        </div>
        <div className=' mt-32'>
          <Image src={map} alt='map location image' className=' w-full block'/>
        </div>
      </section>
    </main>
  )
}
