import { useSelector, useDispatch } from "react-redux"

import { calculateTotalPrice, removeFromCart } from "../redux/reducer/cart";
import { useEffect } from "react";
function Cart() {


    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const disptach = useDispatch();

    const handleRemoveItem = (id) => {
        disptach(removeFromCart(id))
        disptach(calculateTotalPrice())
    }

    useEffect(() => {
        disptach(calculateTotalPrice())

    }, [])

    return <div>
        <p className=" ml-[300px] font-bold text-2xl pt-20">Your shopping cart</p>
        <div className="flex justify-center pt-20 ">
            <div>

                {
                    cartItems.length > 0 &&
                    cartItems.map((item) => (
                        <>
                            {/*  */}
                            <div className='pt-5 '>

                                <div className='border-2 border-gray-300 w-[90%] h-[120px]  flex ml-[100px] shadow-lg'>
                                    <img className=' w-[140px] h-[90px] mt-3 border-2 border-gray-300 ml-5 ' src={item.ImageURL} alt="" />
                                    <p className='ml-20 font-bold mt-10'>{item.name}</p>
                                    <p className='ml-20 font-bold mt-10'>{item.title}</p>
                                    <p className='ml-20 font-bold mt-10'>{item.pcs}</p>
                                    <p className='ml-20 font-bold mt-10'>{item.price}</p>
                                    <button onClick={() => handleRemoveItem(item)} className='ml-20 font-bold mt-10 h-[30px] text-white w-[70px]  rounded-md gradientBg'>remove</button>
                                    {/* <button onClick={() => handleRemoveItem(item)} className="bg-red-100 px-5 rounded">remove</button> */}
                                </div>

                            </div>
                         
                        </>

                    ))


                }

                {/*  */}

                {

                    cartItems.length > 0 ? <div><p className='ml-[250px] mt-5'>Total price</p>
                        <hr className='h-[1.2px] mx-[250px] bg-black text-black ' />
                        <h1 className='text-3xl ml-[250px] font-bold my-10'>{totalPrice}</h1>
                    </div>
                        :
                        <h1 className='pt-[100px] font-bold text-center'>Your Cart Is Empty</h1>
                }
            </div>

        </div>
    </div>
}

export default Cart