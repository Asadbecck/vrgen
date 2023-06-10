import React from 'react'
import { quotes } from '../assets'

const ShownPrizeCard = ({ content, name, title, img }) => {
    return (
        <div className='sm:hidden block'>
            <div className='flex justify-between duration-500 flex-col px-10 py-12 rounded-[20px] max-w-[330px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
                <img src={quotes} alt="double_quotes" className='w-[42px] h-[27px] object-contain' />
                <p className='font-poppins font-normal text-[18px] leading-[32px] h-[120px] text-white my-10'>{content}</p>

                <div className='flex flex-row'>
                    <img src={img} alt={name}
                        className="w-[150px] h-[150px] rounded-[20px]"
                    />
                    <div className='flex flex-col ml-4'>
                        <h4 className=' font-poppins font-semibold text-[20px] leading-[32px]
                         text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500'>{name}</h4>
                        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '
                        >{title}</p>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default ShownPrizeCard;