import React from 'react'
import Image from 'next/image'
import techBg from '@/public/tech-bg.png'
import uiux from '@/public/uiux.png'
import web from '@/public/web.png'
import mobile from '@/public/mobile.png'
import software from '@/public/software.png'
import digital from '@/public/digital.png'
import cyber from '@/public/cyber.png'
import corp from '@/public/more-corp.png'
import business from '@/public/more-bus.png'
import kids from '@/public/more-kids.png'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Tech2jobs() {
  return (
    <main className=" relative text-lg">
      <section className=" relative">
        <Image
          src={techBg}
          alt="tech2jobs page background image"
          className=" w-full h-screen object-cover relative"
        />
        <div className=" text-white-10 absolute left-0 right-0 m-auto top-0 bottom-0 flex flex-col items-center justify-center max-w-[600px] text-center">
          <h2 className=" text-6xl">Tech2Jobs</h2>
          <p className=" capitalize mt-5">
            For more information about our courses, get in touchwith Leumax
            Technology contacts
          </p>
        </div>
      </section>

      <section className=" px-16 py-24">
        <div className=' max-w-[700px] m-auto'>
          <h2 className=" text-3xl font-medium border-b pb-2 border-b-lightGray-10">
            Tech2Jobs
          </h2>
          <p className=" pt-10">
          TechJobs is a basic to advanced tech training to get the youth bridge the employability gap. This is a 4-month programme powered by Leumax Technology. The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work for international tech companies.
          </p>
        </div>
      </section>

      <section className=" px-16 py-24">
        <div className=' text-center'>
            <h2 className=' text-5xl font-medium'>Course that we offer</h2>
            <p>Offer some wide varieties of courses</p>
        </div>

        <div className=' flex justify-between flex-wrap gap-y-10 mt-20'>

            <div className='  border border-lightGray-10 p-4  max-w-[400px]'>
                <Image src={uiux} alt='ui/ux image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Product design(UI/UX)</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='  border border-lightGray-10 p-4 max-w-[400px]'>
                <Image src={web} alt='web development image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Web development</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='  border border-lightGray-10 p-4 max-w-[400px]'>
                <Image src={mobile} alt='mobile development image ' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Mobile development</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='  border border-lightGray-10 p-4 max-w-[400px]'>
                <Image src={software} alt='software development image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Software development</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='  border border-lightGray-10 p-4 max-w-[400px]'>
                <Image src={digital} alt='digital marketing image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Digital marketing</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='  border border-lightGray-10 p-4 max-w-[400px]'>
                <Image src={cyber} alt='cyber security image' className=' w-full'/>
                <div className=' pt-4'>
                    <ul className=' list-disc relative'>
                        <li className=' text-xl font-medium pb-2 ml-6 product-head'>Cyber security</li>
                        <span className=' absolute top-0 bottom-0 m-auto right-0 font-medium text-xl'>3 months</span>
                    </ul>
                    <p className=' text-base'>The training targets people with a basic or no experience in a particular sector in the I.T industry, for student aspiring to work.</p>
                    <div className=' flex justify-between items-center pt-4'>
                        <p className=' font-medium text-xl'>#75,000</p>
                        <Link href={"/web-dev"}>
                            <Button title={"Learn more"} variant={"btn-orange-outline"} type={"button"} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <section className=" px-16 py-24">
        <h2 className=' text-5xl font-medium'>More on Max Academy:</h2>
        <div className=' flex justify-between items-center flex-wrap mt-10'>
            <div className=' max-w-[400px] relative'>
                <Image src={corp} alt='corps image' className=' w-full'/>
                <Link href={'/'} className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'>Corps2Tech 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </Link>
            </div>
            <div className=' max-w-[400px] relative'>
                <Image src={business} alt='corps image' className=' w-full'/>
                <Link href={'/'} className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'>Tech2Business 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </Link>
            </div>
            <div className=' max-w-[400px] relative'>
                <Image src={kids} alt='corps image' className=' w-full'/>
                <Link href={'/'} className=' flex items-center gap-2 absolute bottom-5 left-4 text-white-10'>Tech2Kids 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3386 4.91971L2.86315 16.3952L0.977539 14.5096L12.453 3.0341H2.33863V0.367432H17.0053V15.0341H14.3386V4.91971Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}
