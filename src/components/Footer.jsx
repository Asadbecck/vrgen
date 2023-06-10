import React from 'react'

const Footer = () => {
    return (
        <footer className='text-white'>
            <div className='md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-3/5'>
                    <span className='text-teal-400'>Contact {""}</span>
                    with us you should full this area here
                </h1>
                <div className='sm:pl-20 pt-10'>
                    <input type="text" placeholder='Enter Your Name ' className='text-gray-800 
                    sm:w-72 w-full sm:mr-5 mr-1 lg:mb-5 mb-4 py-2.5 rounded px-2 focus:outline-none'
                />
                 <input type="text" placeholder='Enter Your Surname' className='text-gray-800 
                    sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
                />
                 <input type="email" placeholder='Enter Your Email' className='text-gray-800 
                    sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
                />
                 <input type="text" placeholder='Enter Your Phone Number' className='text-gray-800 
                    sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
                />
                <br />
                <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-20 py-3 xs:mt-5 xs:ml-[190px] font-poppins rounded-md text-white'>
                    Submit
                </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer