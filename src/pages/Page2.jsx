import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.from('#rotateText',{
            transform: 'rotateX(-80deg)',
            opacity:0,
            stagger: 1,
            duration:1.5,
            scrollTrigger:{
                trigger:'#section2',
                start:"top 50%",
                end:"top -340%",
                scrub: 2
            }
        })
    })

  return (
    <div id='section2' className='bg-white text-center p-9 text-black'>
        <h3 className='text-gray-500 text-[1.3vw] font-[portf3]'>
            ©  anzo.studio 2024 | designed and developed</h3>
            <div >
            <div id='rotateText' className='mt-20'>
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>IMPACTFUL</h1>
            </div>
            <div id='rotateText' >
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>design</h1>
            </div>
            <div id='rotateText' >
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>is the</h1>
            </div>
            <div id='rotateText' >
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>design</h1>
            </div>
            <div id='rotateText' >
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>that</h1>
            </div>
            <div id='rotateText' >
                <h1 className='text-black text-[40vw] font-[portf5] uppercase leading-[32vw]'>works!</h1>
            </div>
            </div>
           
    </div>
  )
}

export default Page2