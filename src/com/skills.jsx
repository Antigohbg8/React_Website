import css from '../assets/css.png'
import HTML from '../assets/html.png'
import javascript from '../assets/javascript.png'
import database from '../assets/database.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import TailWind from '../assets/tailwind.png'
import React from 'react'

const skills = () => {
  return (
    <div name='skills' className='bg-[#1fb4a0] w-full h-screen text-gray-300'>
        <div className='max-w-[1000] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#d6cb32]'>My Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailWind} alt="HTML icon" />
                    <p className='my-4'>TailWindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={database} alt="HTML icon" />
                    <p className='my-4'>SQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                </div>
            </div>
        </div>
    
  )
}

export default skills