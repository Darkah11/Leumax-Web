import Button from '@/components/Button'
import Image from 'next/image'
import heroImg from '@/public/hero-img.png'
import lady from '@/public/lady.png'
import man from '@/public/man.png'
import landing from '@/public/landing.png'
import ux from '@/public/ux.png'
import it from '@/public/it-solutions.png'
import Faq from "@/components/Faq";
import { Arrow } from '@/components/Arrow'

export default function Home() {
  const data = ([
    {
      title: 'IT Consultant',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
    {
      title: 'Product Design',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
    {
      title:
        'IOT Engineering',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
    {
      title:
        'Sales & Marketing',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
    {
      title:
        'Web Development',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
    {
      title:
        'Mobile Apps Development',
      body: 'is a dynamic learning hub committed to providing cutting-edge computer courses, equipping students with the skills and knowledge needed to excel',
    },
  ])
  const itemClasses = {
    base: "pt-4",
    title: "text-xl",
    indicator: "ml-auto",
    content: "pb-8"
  };

  return (
    <main className=" text-lg">
      {/* Hero section */}

      <section className=" pt-24 ">
        <div className=" text-center max-w-[1200px] flex flex-col m-auto px-16 relative">
          <p className="border border-orange-10 absolute top-0 flex justify-center self-center px-2 rounded-full">We Build To Last</p>
          <h1 className=" text-6xl font-medium pt-20 leading-normal">
            Providing Tech Skills For Creatives & IT support for Business
          </h1>
          <p className="max-w-2xl m-auto pt-5">
            We have years of experience and hands-on you can bank on. We develop
            Solutions and Tools to ease your business
          </p>
          <div className=" pt-10 flex items-center gap-5 justify-center">
            <Button
              title={'For Creatives'}
              type={'button'}
              variant={'btn-orange'}
            />
            <Button
              title={'For Business'}
              type={'button'}
              variant={'btn-orange-outline'}
            />
          </div>
        </div>
        <div className=" mt-20">
          <Image src={heroImg} alt="hero image" />
        </div>
      </section>

      {/* about section */}

      <section className=" px-16 py-24">
        <div className=" flex justify-between ">
          <p className=" text-base text-orange-10">How We Work</p>
          <h2 className=" text-5xl font-medium w-[70%] leading-snug">
            Experience a streamlined process and achieve your IT goals with us.
          </h2>
        </div>
        <div className=" flex justify-between mt-20">
          <div className=" max-w-[420px]">
            <span className=" text-4xl text-lightGray-10">01.</span>
            <h3 className=" text-3xl font-medium mt-8">Fill out “Get Quote”</h3>
            <p className=" text-base pt-2">
              Get Quote' feature – a streamlined process to receive personalized
              quotes for our IT support
            </p>
          </div>
          <div className=" max-w-[420px]">
            <span className=" text-4xl text-lightGray-10">02.</span>
            <h3 className=" text-3xl font-medium mt-8">
              Get Free Consultation
            </h3>
            <p className=" text-base pt-2">
              Elevate your goals with Leumax Technology's 'Get Free
              Consultation,' where innovation meets expertise.
            </p>
          </div>
          <div className=" max-w-[420px]">
            <span className=" text-4xl text-lightGray-10">03.</span>
            <h3 className=" text-3xl font-medium mt-8">Start the project</h3>
            <p className=" text-base pt-2">
              ensuring timely solutions and a seamless journey towards your
              technological goals."
            </p>
          </div>
        </div>
      </section>

      {/* it solutions section  */}

      <section className=" px-16 py-24 bg-black-10 text-white-10">
        <h2 className=' text-6xl font-medium max-w-[1000px] capitalize leading-snug'>We provide <span className=' text-orange-10'>IT solutions</span>  tailored to your needs.</h2>
        <div className=' flex justify-between items-start mt-20'>
          <div className=' w-[40%]'>
            <Image src={it} alt='it solutions image' className=' w-full'/>
          </div>

          <div className=' w-1/2'>
            <Faq data={data} style={itemClasses} link={"Get a quote"} icon={<Arrow />}/>
          </div>
        </div>
      </section>

      {/* max academy section  */}

      <section className=" px-16 py-24">
        <div className=" flex justify-between ">
          <p className=" text-base text-orange-10">Max Academy</p>
          <div className="w-[70%]">
            <h2 className=" text-5xl font-medium leading-snug">
              Max Academy, an integral part of Leumax Technology
            </h2>
            <p className="py-5">
              is a dynamic learning hub committed to providing cutting-edge
              computer courses, equipping students with the skills and knowledge
              needed to excel
            </p>
            <Button
              title={'Explore Courses'}
              variant={'btn-orange-outline'}
              type={'button'}
            />
          </div>
        </div>
        <div className=" flex justify-between items-center gap-5 mt-20">
          <Image
            src={lady}
            alt="academy section image"
            className=" h-[450px] object-cover"
          />
          <Image
            src={man}
            alt="academy section image "
            className=" h-[450px] object-cover"
          />
        </div>
      </section>

      {/* Recently worked */}

      <section className=" px-16 py-24">
        <h2 className=" text-5xl font-medium max-w-2xl leading-snug">
          Recently Worked On Project Our Work Speaks For Itself
        </h2>
        <div className=" flex justify-between items-center mt-24">
          <Image src={ux} alt="ux design" className=" w-[49%]" />
          <Image
            src={landing}
            alt="landing page mock up"
            className=" w-[49%]"
          />
        </div>
      </section>
    </main>
  )
}
