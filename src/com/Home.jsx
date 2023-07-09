import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#1fb4a0]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-[#d6cb32]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font bold text-[#ffffff]'>Chris Krueger</h1>
            <h2 className='text-4xl sm:text-7xl font bold text-[#505050]'>I'm a Software Engineering Student</h2>
            <p className='text-2xl text-[#4d4c4c] py-4 max-w-[700px]'>I am going to be a senior at UW Eau Claire where I have been learning Java and SQL.
                I am currently learning Html Css JS React and Python. I am looking for an internship
                to further my skills and network with other Software Engineers.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-43 my-2 flex items-center hover:bg-[#d6cb32] hover:border-[#d6cb32]'>
                    <Link to="work"smooth={true} duration={500}>
                        View My Projects
                    </Link>
                 <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                 </span>
                </button>
            </div>

        </div>
        

    </div>


    
  )
}

export default Home