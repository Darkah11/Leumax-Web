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
    title: "text-xl mr-auto",
    indicator: "ml-auto",
    content: "pb-8"
  };

  return (
    <main className=" text-base lg:text-lg">
      {/* Hero section */}

      <section className=" pt-10">
        <div className=" md:text-center md:max-w-[800px] lg:max-w-[1200px] px-5 flex flex-col md:m-auto lg:px-16 relative">
          <p className="border text-sm border-orange-10 absolute top-0 justify-start  flex md:justify-center md:self-center px-2 rounded-full">We Build To Last</p>
          <h1 className="lg:text-5xl md:text-5xl pt-10 text-3xl">
          From ideation to value <span className=' block font-bold'>Let’s Build Together.</span>
          </h1>
          <p className="max-w-2xl m-auto pt-5 hero-text">
          We connect your ideas with digital reality, creating impactful solutions that accelerate business growth, nurture employee engagement, and enrich customer experiences.
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
        <div className=" mt-20">
          <Image src={heroImg} alt="hero image" />
        </div>
      </section>

      {/* about section */}

      <section className=" px-5 lg:px-16 py-24">
        <div className=" flex flex-col md:justify-between md:flex-row ">
          <p className=" text-sm md:text-base text-orange-10">How We Work</p>
          <h2 className=" lg:text-5xl md:text-4xl text-2xl font-medium md:w-[70%] leading-snug">
            Experience a streamlined process and achieve your IT goals with us.
          </h2>
        </div>
        <div className=" flex justify-between flex-wrap mt-20 gap-y-10">
          <div className=" w-[300px] md:w-[350px] lg:w-[400px]">
            <span className=" text-2xl md:text-3xl lg:text-4xl text-lightGray-10">01.</span>
            <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium mt-8">Fill out “Get Quote”</h3>
            <p className=" text-sm md:text-base pt-2">
              Get Quote' feature – a streamlined process to receive personalized
              quotes for our IT support
            </p>
          </div>
          <div className=" w-[300px] md:w-[350px] lg:w-[400px]">
            <span className="text-2xl md:text-3xl lg:text-4xl text-lightGray-10">02.</span>
            <h3 className=" text-xl md:text-2xl lg:text-3xl font-medium mt-8">
              Get Free Consultation
            </h3>
            <p className="  text-sm md:text-base pt-2">
              Elevate your goals with Leumax Technology's 'Get Free
              Consultation,' where innovation meets expertise.
            </p>
          </div>
          <div className=" w-[300px] md:w-[350px] lg:w-[400px]">
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
            <Button
              title={'Explore Courses'}
              variant={'btn-orange-outline'}
              type={'button'}
            />
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
          Recently Worked On Project Our Work Speaks For Itself
        </h2>
        <div className=" flex flex-col gap-y-10 md:flex-row md:justify-between md:items-center mt-24">
          <Image src={ux} alt="ux design" className=" w-full md:w-[49%] object-cover block" />
          <Image
            src={landing}
            alt="landing page mock up"
            className=" w-full md:w-[49%] object-cover block"
          />
        </div>
      </section>
    </main>
  )
}
