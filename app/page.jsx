import Button from '@/components/Button'
import Image from 'next/image'
import heroImg from '@/public/hero-img.png'
import lady from '@/public/lady.png'
import man from '@/public/man.png'
import landing from '@/public/landing.png'
import ux from '@/public/ux.png'
import it from '@/public/it-solutions.png'
import js from '@/public/homeIcons/js.svg'
import next from '@/public/homeIcons/nextjs.svg'
import tail from '@/public/homeIcons/tailwind.svg'
import css from '@/public/homeIcons/css.svg'
import html from '@/public/homeIcons/html.svg'
import react from '@/public/homeIcons/react-js.svg'
import boot from '@/public/homeIcons/bootstrap.svg'
import python from '@/public/homeIcons/python.svg'
import node from '@/public/homeIcons/nodejs.svg'
import collin from '@/public/sponsors/collin-logo.png'
import google from '@/public/sponsors/google-logo.png'
import innermen from '@/public/sponsors/innermen-logo.png'
import microsoft from '@/public/sponsors/microsoft-logo.png'
import osun from '@/public/sponsors/osun-logo.png'
import ondo from '@/public/sponsors/ondo-logo.png'
import premier from '@/public/sponsors/premier-logo.png'
import Faq from "@/components/Faq";
import { Arrow } from '@/components/Arrow'
import 'animate.css';
import Link from 'next/link'

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
    title: "text-xl mr-auto",
    indicator: "ml-auto",
    content: "pb-8"
  };

  return (
    <main className=" text-base lg:text-lg">
      {/* Hero section */}
      <section className=' animate__animated animate__fadeIn relative'>
        <div className=' relative min-h-screen  flex justify-center'>

        <Image src={js} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-[50%] left-0'/>
        <Image src={python} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-16 left-5'/>
        <Image src={react} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-24 right-10'/>
        <Image src={css} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-24 left-8'/>
        <Image src={html} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-[50%] right-5 '/>
        <Image src={boot} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-24 right-10'/>
        <Image src={node} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-5 right-1/2'/>
        <Image src={tail} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute bottom-32 left-1/2'/>
        <Image src={next} alt='javascript icon' 
        className=' w-[30px] md:w-[40px] lg:w-[50px] aspect-square absolute top-0 right-0'/>

        
          <div className="relative m-auto  z-30 md:text-center max-w-[600px] 
          lg:max-w-[1200px] px-5 md:px-0 flex flex-col  md:m-auto lg:px-16">
          <p className="border text-sm border-orange-10 absolute -top-10 justify-start  flex md:justify-center md:self-center px-2 rounded-full">We Build To Last</p>
          <h1 className="lg:text-5xl md:text-5xl text-3xl">
          From ideation to value <span className=' block font-bold'>Let’s Build Together.</span>
          </h1>
          <p className="max-w-2xl m-auto pt-5 hero-text">
          We connect your ideas with digital reality, creatng impactful solutions that accelerate business growth, nurture employee engagement, and enrich customer experiences.
          </p>
          <div className=" pt-10 flex items-center justify-start gap-5 md:justify-center">
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
        </div>
        <div>
          <Image src={heroImg} alt="hero image" />
        </div>
      </section>

      {/* about section */}

      <section className=" animate__animated animate__slideInLeft  px-5 lg:px-16 py-24">
        <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">How We Work</p>
          <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium md:w-[70%] leading-snug">
            Experience a streamlined process and achieve your IT goals with us.
          </h2>
        </div>
        <div className=" flex justify-between flex-col md:flex-row mt-20 gap-y-10">
          <div className=" w-[300px] md:w-[31%]">
            <span className=" text-2xl md:text-3xl lg:text-4xl text-lightGray-10">01.</span>
            <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium mt-8">Fill out “Get Quote”</h3>
            <p className=" text-sm md:text-base pt-2">
              Get Quote' feature – a streamlined process to receive personalized
              quotes for our IT support
            </p>
          </div>
          <div className=" w-[300px] md:w-[31%] ">
            <span className="text-2xl md:text-3xl lg:text-4xl text-lightGray-10">02.</span>
            <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium mt-8">
              Get Free Consultation
            </h3>
            <p className="  text-sm md:text-base pt-2">
              Elevate your goals with Leumax Technology's 'Get Free
              Consultation,' where innovation meets expertise.
            </p>
          </div>
          <div className=" w-[300px] md:w-[31%]">
            <span className="text-2xl md:text-3xl lg:text-4xl text-lightGray-10">03.</span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-8">Start the project</h3>
            <p className="  text-sm md:text-base pt-2">
              Ensuring timely solutions and a seamless journey towards your
              technological goals."
            </p>
          </div>
        </div>
      </section>

      {/* it solutions section  */}

      <section className=" px-5 lg:px-16 py-24 bg-black-10 text-white-10">
        <h2 className=' lg:text-5xl md:text-4xl text-2xl font-medium md:max-w-[600px] lg:max-w-[800px]  capitalize leading-snug'>We provide <span className=' text-orange-10'>IT solutions</span>  tailored to your needs.</h2>
        <div className=' lg:flex lg:justify-between lg:items-center lg:gap-8 mt-20'>
          <div className=' w-[40%] hidden lg:block '>
            <Image src={it} alt='it solutions image' className=' w-full '/>
          </div>

          <div className=' w-full max-w-[700px] mx-auto'>
            <Faq data={data} style={itemClasses} link={"Get a quote"} icon={<Arrow />}/>
          </div>
        </div>
      </section>

      {/* max academy section  */}

      <section className=" px-5 lg:px-16 py-24">
        <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">Max Academy</p>
          <div className="md:w-[70%]">
            <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium leading-snug">
              Leumax Academy, an integral part of Leumax Technology
            </h2>
            <p className="py-5">
              is a dynamic learning hub committed to providing cutting-edge
              computer courses, equipping students with the skills and knowledge
              needed to excel
            </p>
            <Link href={'/contact'}>
            <Button
              title={'Explore Courses'}
              variant={'btn-orange-outline'}
              type={'button'}
            />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-between md:items-center gap-y-5 mt-20 w-full">
          <Image
            src={lady}
            alt="academy section image"
            className=" h-[450px] object-cover w-full md:w-[29%]"
          />
          <Image
            src={man}
            alt="academy section image "
            className=" h-[450px] object-cover w-full md:w-[69%]"
          />
        </div>
      </section>

      {/* Recently worked */}

      <section className=" px-5 lg:px-16 py-24">
        <h2 className=" lg:text-5xl md:text-4xl text-2xl  font-medium max-w-2xl leading-snug">
          Proudly Sponsored By
        </h2>
        <div className=" flex flex-wrap gap-y-10 justify-between md:items-center mt-24">
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center'>
          <Image src={ondo} alt="ondo state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center'>
          <Image src={osun} alt="osun state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center'>
          <Image src={google} alt="osun state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center'>
          <Image src={microsoft} alt="osun state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center '>
          <Image src={collin} alt="osun state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center '>
          <Image src={premier} alt="osun state logo" className="w-full object-cover block" />
          </div>
          <div className=' w-[48%] md:w-[31%] flex flex-col justify-center '>
          <Image src={innermen} alt="osun state logo" className="w-full object-cover block" />
          </div>
        </div>
      </section>
    </main>
  )
}
