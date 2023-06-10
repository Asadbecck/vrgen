import styles from "../style"
import {  glassTwo, glassThree, backFoneOne, backFoneTwo, manVr } from "../assets"
import GetStarted from './GetStarted'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import './CSS/Header.css'

const Header = () => {
    const [text]=useTypewriter({
        words:["Studying Method.", "Living Method.", "Teaching Method."],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
    });

    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        The Next  <br className="sm:block hidden" />{''}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">Generation</span>{" "} <br />
                    </h1>

                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-[300px] h-[300px]">

                    {text}
                    <span className="">
                        <Cursor cursorStyle='|'/>
                    </span>

                    {/* here typing effect */}
                </h1>
                <p className={`${styles.paragraph} mx-w-[470px] `}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate esse aspernatur odio illum enim dignissimos reiciendis iusto? Laborum culpa quidem rerum quaerat dolores recusandae nulla eius tempora ea dignissimos.
                </p>
            </div>

            <div>
                <img src={backFoneOne} alt="" className="absolute sm:pb-[100px] am:w-[100px] w-[200px] h-[100px]  sm:top-40 right-0 pink_gradient" />
                <img src={backFoneTwo} alt="" className="absolute sm:pb-[100px] xl:w-[60%] xl:h-[70%] sm:top-20 top-[0px] right-[260px] pink_gradient" />
                <div className="relative mainAnimationBox">
                    <img src={manVr} alt="robotHand" id="robotHand" className="w-[1000px] mb-[0px] sm:pt-0 pt-20 h-[500px]" />
                </div>
            </div>
            <br />
            <br />
        </section>

    )
}

export default Header