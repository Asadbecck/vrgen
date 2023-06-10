import { apple, agirl, google } from "../assets";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const EsiesCantrol = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);
  return (
    <section data-aos="fade-right" id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={agirl} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div data-aos="fade-left" className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500`}>
          Easily control your <br className="sm:block hidden" /> students &
          education system
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
};

export default EsiesCantrol;