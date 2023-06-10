import { features } from "../constants/index";
import styles, { layout } from "../style";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const FeatureCard = ({ icon, title, content, index }) => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);


  return (
    < div data-aos="fade-left" className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`
    }>
      <div  
       className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1"> {title}</h4>
        <p className="font-poppins font-normal text-dimwhite text-[16px] leading-[24px] mb-1">{content}</p>
      </div>
    </div >
  )
}
const Business = () => {
  return (
    <div data-aos="fade-right">
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500`} >You do the education, <br className="sm:block hidden" /> we’ll handle the method.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right method, you can improve your education center life by using our idea, earning rewards and saving time. But with hundreds of VR card on the education.</p>
          <Button styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => {
            return <FeatureCard key={feature.id} {...feature} index={index} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Business