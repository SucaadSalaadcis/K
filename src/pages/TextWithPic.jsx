import img from '../assets/img/d7.png'
import {motion} from 'framer-motion'
import {FadeIn} from '../varients'


function TextWithPic() {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto space-y-10' id='about'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
     <motion.div className='md:w-1/2'
       variants={FadeIn('right',0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
     >
       <img src={img} alt="" />
     </motion.div>
     {/* about content */}
     <motion.div className='md:w-2/5'
       variants={FadeIn('left',0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
     >
        <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
         We have been improving our product <span className='text-secondary'>for many years.</span>
        </h2>
        <p className='text-tartiary text-lg mb-7'>"Redefining Possibilities with KaafTOON Electronics. We blend innovation with functionality to deliver products that exceed your expectations.</p>
        <button className='btnPrimary'>Get Started</button>
     </motion.div>
    </div>
    {/* 2 */}

</div>
  )
}

export default TextWithPic