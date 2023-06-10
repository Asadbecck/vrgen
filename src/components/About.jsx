import { Events } from '../constants'
import PrizeCard from './PrizeCard'
import styles from '../style'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import ShownPrizeCard from './ShownPrizeCard';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1700 })
    }, []);
    return (
        <section  id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

            <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative'>
                <h1 data-aos="fade-right" className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500`}
                >What we have <br className='sm:block hidden' /> won from popular <br className='sm:block hidden' /> events</h1>
                <div data-aos="fade-left" className='w-full md:mt-0 mt-6'>
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}
                    >Everything you need to make sure yourself described and were surely rewarded by professionals</p>
                </div>
            </div>

            <div data-aos="fade-up" className='flex flex-wrap sm:justify-start  w-[100%] feedback-container  z-[1]'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper "
                >
                    {
                        Events.map((card, index) => (
                            <SwiperSlide key={index}>
                                <PrizeCard key={card.id} {...card} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {
                        Events.map((card) => (
                                <ShownPrizeCard key={card.id} {...card} />
                        ))
                }
            </div>

        </section>
    )
}

export default About