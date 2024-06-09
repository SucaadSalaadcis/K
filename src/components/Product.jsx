import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/cart"


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({product}){


    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))

        toast("Added To Cart Successfuly...", {
          position: "top-right",
          autoClose: 3000,
      });
    }

    return (
        <div className='sm:mt-10 m  mt-10 w-full border-2 border-gray-500 p-3 rounded md:mt-20'>
          {/*  */}
    
          <img src={product.ImageURL} alt="demo"
            className=' lg:ml-3 mt-0 rounded-md  hover:transition-all duration-500 lg:w-[250px] lg:h-[250px]' />
          <p className='font-bold '>{product.title}</p>
          <p className='font-bold text-red-400'>{product.pcs}</p>
          <h1 className='font-bold text-green-400'>{product.price}</h1>
    
          <button onClick={handleAddToCart} className=' gradientBg cursor-pointer px-20 text-white rounded mt-5 py-2 '>Add to Cart</button>
    
          {/*  */}
        </div>
      )
}

export default Product