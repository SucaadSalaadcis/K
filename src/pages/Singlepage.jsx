import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselPicture from '../components/CarouselPicture'
function Singlepage() {
  const [ImageURL, setImageURL] = useState('')
  const [title, setTitle] = useState('')
  const [pcs, setPcs] = useState('')
  const [price, setPrice] = useState('')
  const params = useParams();

  const handleSingleData = () => {
    axios.get(`https://server-z329.onrender.com/electronic/${params.id}`).then((response) => {
      setImageURL(response.data[0].ImageURL);
      setTitle(response.data[0].title);
      setPcs(response.data[0].pcs);
      setPrice(response.data[0].price);

    }).catch((error) => console.log(error))
  };


  useEffect(() => {
    handleSingleData();
  },)

  // counter
  const [tiro, setTiro] = useState(1)
  const handleIncrimentTiro = () => {
    setTiro(tiro + 1)
  }
  const handledecrimentTiro = () => {
    if (tiro > 1) {
      setTiro(tiro - 1)

    }
  }

  // images
  const images = [
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713999.jpg?t=st=1716871613~exp=1716875213~hmac=80b1b989744d362715af816b4cfa775b9b5c246968f63a94430f2e0794b2733f&w=740',
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714005.jpg?t=st=1716871664~exp=1716875264~hmac=8a36cbd9b85719bc0ac14819a511ca3954ce6d6112d6cfc11a34c42b7400c6aa&w=740',
    'https://img.freepik.com/premium-photo/visual-business_931878-438160.jpg?w=740',
    // 'src/assets/3L.png',
    'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714001.jpg?t=st=1716871876~exp=1716875476~hmac=17c9ce0967b8cf53534cd63d2b13d32d8986bd4609fe8aa746b6e981f30c5f3d&w=740'

  ];

  const [mainImage, setMainImage] = useState(images[0]);


  return (
    <>
      <div className="flex flex-wrap m-10 sm:ml-32">
        <div className="flex flex-col items-center w-full  sm:w-2/5">
          {/* main image */}
          <img src={ImageURL} alt="Thumbnail 0" className="w-full h-[365px] max-w-md mb-2" />
          {/* small images */}
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(image)}
                className='hover:border-black border-4 rounded-md w-16 h-16 md:w-[100px] md:h-24'
              />
            ))}
          </div>
        </div>
        <div className="w-full sm:w-3/5 p-5 space-y-5 text-xl">
          <h1 className=" font-bold ">{title}</h1>
          <div className='space-y-5'>
            <p >{pcs}</p>
            <p>MRP: <span className="line-through">$20</span> Price: <span className="font-bold">${price}</span></p>
            <p>You Save: 5% Inclusive of all taxes</p>
            <p className="text-green-500">In Stock</p>
            <p>Sold by <a href="#" className="text-blue-500">Kaaftoon online</a></p>
            {/* the inc/dec buttons */}
            <div className='flex gap-5'>
              <button onClick={handledecrimentTiro} className='w-[40px] rounded-full  gradientBg text-3xl h-[40px] text-white '>-</button>
              <h1 className='text-4xl'>{tiro}</h1>
              <button onClick={handleIncrimentTiro} className='w-[40px] gradientBg rounded-full text-3xl h-[40px] text-white '>+</button>
            </div>
            {/* last button */}
            <div className=' mt-3 font-semibold'>
              <button className='gradientBg text-white w-[150px] text-1xl h-[40px] shadow-2xl rounded-md '>
                <span> add to cart</span>  <i class="fa-solid fa-basket-shopping ml-1 text-white"></i> </button>
            </div>
          </div>
        </div>


      </div>



      {/* carousel */}
      <div className='mb-20'>
        <CarouselPicture heading="You May Also Like" />
      </div>

    </>
  )
}

export default Singlepage