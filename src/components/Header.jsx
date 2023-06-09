import styles from "../style"
import { discount, robotHand, glassTwo, glassThree, backFoneOne, backFoneTwo } from "../assets"
import GetStarted from './GetStarted'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import './CSS/Header.css'

const Header = () => {
    const [text] = useTypewriter({
        words: ["Studying Method.", "Living Method.", "Teaching Method."],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    });

    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Discount For{" "}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>


                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        The Next  <br className="sm:block hidden" />{''}
                        <span className="text-gradient">Generation</span>{" "} <br />
                    </h1>

                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">

                    {text}
                    <span className="">
                        <Cursor cursorStyle='|' />
                    </span>

                    {/* here typing effect */}
                </h1>
                <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate esse aspernatur odio illum enim dignissimos reiciendis iusto? Laborum culpa quidem rerum quaerat dolores recusandae nulla eius tempora ea dignissimos.
                </p>
            </div>

            <div>
                <img src={backFoneOne} alt="" className="absolute sm:pb-[100px]  sm:top- top-0 right-0 pink_gradient" />
                <img src={backFoneTwo} alt="" className="absolute sm:pb-[100px] xl:w-[100%] xl:h-[70%] sm:top-10 top-[700px] right-2 pink_gradient" />
                <div className="relative mainAnimationBox">
                    <div className="flex absolute sm:bottom-[200px] justify-center">
                        <img src={glassTwo} alt="" className="glassTwo sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]" />
                        <img className="sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] glassThree"
                            src={glassThree} />
                    </div>
                    <img src={robotHand} alt="robotHand" id="robotHand" className="w-[100%] mt-[10px] sm:pt-0 pt-20" />
                </div>
            </div>


        </section>
    )
}

export default Header