import React from 'react'
import Image from 'next/image'
import services from '@/public/services.png'
import Button from '@/components/Button'

export default function WebDev() {
  return (
    <main className=" relative text-lg">
      <section className=" relative">
        <Image
          src={services}
          alt="web development page background image"
          className=" w-full h-screen object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" text-5xl">Web Development</h2>
          <p className=" capitalize mt-5">
            For more information about our courses, get in touch with Leumax
            Technology contacts
          </p>
        </div>
      </section>


      <section className=" px-16 py-24 ">
        <div className=' max-w-[850px] m-auto'>
          <div>
            <h2 className=' text-3xl font-medium border-b pb-2 border-b-lightGray-10'>Web development</h2>
            <p className=' pt-10'>
              Embark on a transformative journey into the digital realm with
              Leumax Technology's Web Development course. Explore the
              intricacies of crafting dynamic and responsive websites, mastering
              essential skills in HTML, CSS, JavaScript, and more.
              <br />
              <br />
              Unleash your creative potential and build the foundation for a
              dynamic career in the ever-evolving field of web development
            </p>
          </div>


          <div className=' pt-16'>
            <h3 className=' text-3xl font-medium border-b pb-2 border-b-lightGray-10'>Web Development for Beginners Course Outline</h3>
            <div className=" flex flex-start gap-3 pt-10">
              <ul className=' w-1/2'>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 1: Introduction to Web Development</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 2: HTML Fundamentals</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 3: CSS Essentials</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 4: Introduction to JavaScript</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 5: Document Object Model (DOM)</p>
                </li>
              </ul>

              <ul className=' w-1/2'>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 6: Introduction to Responsive Design</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 7: Introduction to Version Control (Git)</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 8: Introduction to Basic Web Hosting</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Module 8: Introduction to Basic Web Hosting</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Project Work and Capstone Project</p>
                </li>
                <li className="web-dev-list">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0026 14L16.0737 6.92893L14.6595 5.51472L9.0026 11.1716L6.17421 8.3431L4.75999 9.7574L9.0026 14Z"
                      fill="#F37335"
                    />
                  </svg>
                  <p>Final Assessment</p>
                </li>
              </ul>
            </div>
          </div>

          <div className=' pt-16'>
            <h3 className=" text-3xl font-medium pb-2">Request a quote</h3>
            <form className=" w-full">
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
                <input
                  type="text"
                  placeholder="Phone number"
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
                  title={'Get a quote'}
                  type={'submit'}
                  variant={'btn-orange w-[200px] ml-auto'}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
