import videoBg from '../assets/main_5-2 (1).mp4' 

const Video = () => 
   (
    <div className='w-[100%] h-[80%]'>
        <video src={videoBg}  autoPlay loop className='w-[100%] h-[10%]'/>
    </div>
  )


export default Video;