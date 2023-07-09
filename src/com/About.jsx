import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1fb4a0] text-gray-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font bold inline border-b-4 border-[#d6cb32]'>About</p>
                    </div>
                        <div>
                        </div>
                        </div>
                    <div className='max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8 pl-4'>
            <div className='sm:text-right text-4xl font-bold' >
                <p>Hi. I'm Chris, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>I am truly passionate about pursuing an internship in software development as it aligns
                    perfectly with my enthusiasm for learning and expanding my technical skills. The dynamic
                    and ever-evolving nature of the field ignites my curiosity and motivates me to continuously
                    explore new concepts and technologies. I am eager to immerse myself in real-world
                    projects, collaborate with seasoned developers, and actively contribute to the development
                    process. With a strong foundation in programming and a desire to tackle complex challenges,
                    I am committed to leveraging this internship opportunity to further enhance my software    
                    development expertise and make a meaningful impact in the industry. </p>
            </div>
                </div>
            </div>
        </div>


    
  )
}

export default About