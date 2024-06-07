import Image from 'next/image'
import React from 'react'
import aboutImg from '@/public/about-img.png'
import team1 from '@/public/team1.png'
import team2 from '@/public/team2.png'
import team3 from '@/public/team3.png'
import team4 from '@/public/team4.png'
import team5 from '@/public/team5.png'
import team6 from '@/public/team6.png'
import twitter from '@/public/twitter.svg'
import linkedin from '@/public/linkedin.svg'
import avatar from '@/public/avatar.svg'
import left from '@/public/arrow-left.svg'
import right from '@/public/arrow-right.svg'

export default function AboutUs() {
  return (
    <main className=" relative text-lg">
      <section className=" relative">
        <Image
          src={aboutImg}
          alt="about page background image"
          className=" w-full h-screen object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" text-5xl">About Leumax Tech</h2>
          <p className=" capitalize mt-5">
            Leumax Technology is a dedicated team passionate about bridging the
            gap between technology and education, empowering individuals and
            businesses{' '}
          </p>
        </div>
      </section>

      {/* leumax technology  */}

      <section className=" px-16 py-24">
        <div className=" flex justify-between ">
          <p className=" text-base text-orange-10">Why Leumax Technology</p>
          <div className="w-[70%]">
            <p className=" text-2xl capitalize">
              <span className=' text-darkgray-10'>At Leumax Technology</span>, we thrive on a shared commitment to
              excellence, creativity, and continuous learning. 
              <br />
              <br />
              With a focus on <span className=' text-darkgray-10'>personalized solutions</span>
              and collaborative partnerships, we are
              dedicated to shaping a future where <span className=' text-darkgray-10'>technology drives innovation</span>, 
              knowledge empowers growth, and every individual's <span className=' text-darkgray-10'>potential is realized.</span> 
            </p>
            {/* dropdown here */}
          </div>
        </div>
      </section>

      {/* amazing team */}

      <section className=" px-16 py-24">
        <div className=' max-w-[500px] m-auto text-center '>
            <h2 className=' text-5xl font-medium pb-4'>The Amazing Team</h2>
            <p>We are a group of builders and operators with extensive 
firsthand expertise in this field.</p>
        </div>
        <div className=' flex justify-between items center flex-wrap gap-y-10 mt-12'>
            <div className=' relative max-w-[400px]'>
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
            <div className=' relative max-w-[400px]'>
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
            <div className=' relative max-w-[400px]'>
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
            <div className=' relative max-w-[400px]'>
            <Image src={team4} alt="our team member's image" className=' w-full'/>
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
            <div className=' relative max-w-[400px]'>
            <Image src={team5} alt="our team member's image" className=' w-full'/>
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
            <div className=' relative max-w-[400px]'>
            <Image src={team6} alt="our team member's image" className=' w-full'/>
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

      {/* testimonials */}

      <section className=' px-16 py-24'>
        <div className=' max-w-[70%] px-16 py-24'>
            <p className="border border-orange-10 inline px-2 py-1 rounded-full ">Testimonials</p>
            <h2 className=' text-5xl font-medium capitalize pt-8'>Amplifying the contentment expressed by our client</h2>
        </div>
        <div className=' w-[70%] pr-5 ml-auto'>
          <div className=' flex flex-col gap-10 items-start border-l border-l-orange-10 px-8 max-w-[800px]'>
            <p>We have years of experience and hands-on you can bank on. We develop Solutions and Tools to ease your business processes via the web. We also train and support our </p>
            <div className=' flex items-center gap-8'>
              <Image src={avatar} alt='avatar image' width={60} height={60}/>
              <div>
                <p className=' text-lg font-semibold'>Olayode Usman</p>
                <p className=' text-sm'>Andela, Project Manager</p>
              </div>
            </div>
          </div>
          <div className=' flex justify-between items-center pt-20'>
            <Image src={left} alt='left arrow' width={30} height={30}/>
            <Image src={right} alt='right arrow' width={30} height={30}/>
          </div>
        </div>
      </section>
    </main>
  )
}
 