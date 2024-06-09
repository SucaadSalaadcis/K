import { useEffect, useState } from "react";
import Product from "./Product"
import axios from "axios";

function ProductList() {
    const [electronics, setElectronics] = useState([]);
  
    const handleElectronics = () => {
      axios.get("https://server-z329.onrender.com/electronic/").then((response) => {
        setElectronics(response.data)
      }).catch((error) => console.log(error))
    }
  
  
    useEffect(() => {
      handleElectronics();
    }, [])
  
    return (
      <div className='sm:grid mt-[220px]  sm:mt-2 mb-32  lg:ml-10 sm:ml-0   sm:grid-cols-[300px_300px_300px_300px] sm:justify-evenly'>
  
         {/* mine */}
        {electronics.map((item) => {
  
          return <Product product={item} />
        })}
  
      </div>
    )
  }
  

export default ProductList