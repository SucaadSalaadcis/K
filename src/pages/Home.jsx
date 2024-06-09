import Slider from '../components/Slider'
import CarouselPicture from '../components/CarouselPicture'
import Features from '../pages/Features'
import TextWithPic from './TextWithPic'

function Home() {
  return (
    <>
      <Slider />
      <CarouselPicture heading="All The Products" />
      <Features/>
      <TextWithPic/>
    </>
  )
}

export default Home