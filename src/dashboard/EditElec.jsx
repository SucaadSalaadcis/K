import axios from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditElec() {

  const [ImageURL, setImageURL] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [pcs, setPcs] = useState('')
  const [price, setPrice] = useState('')

  const params = useParams();
  const navigate = useNavigate()

   
  // get single data
  const handleGetSingleData = () => {
    axios.get(`https://server-z329.onrender.com/electronic/${params.id}`).then((response) => {
      setImageURL(response.data[0].ImageURL);
      setName(response.data[0].name);
      setTitle(response.data[0].title);
      setPcs(response.data[0].pcs);
      setPrice(response.data[0].price);

    }).catch((error) => console.log(error))
  };


  useEffect(() => {
    handleGetSingleData();
  },[])

  const hangleUpdate = (e) => {
    e.preventDefault();
    const data = {
      ImageURL,
      name,
      title,
      pcs,
      price,
    }
    // console.log(data)
    axios.put(`https://server-z329.onrender.com/electronic/${params.id}`,data).then(()=> {
        if(data) {
            toast("Updated Successfuly...", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate("/dashboard/manage");
            console.log(data)
        }
    }).catch((error)=> console.log(error))
   };
    
    return (
      <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update A Product</h2>
      {/* form */}
      <form onSubmit={handleGetSingleData} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label value="Image URL " className='text-lg'/>
            </div>
            <TextInput onChange={(e) => setImageURL(e.target.value)} name='ImageURL' value={ImageURL} type="text"  required />
          </div>
          {/* name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label value="Name " className='text-lg' />
            </div>
            <TextInput onChange={(e) => setName(e.target.value)} name='name' value={name} type="text"  required />
          </div>
        
        

        </div>
        {/* second row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label value="Title " className='text-lg'/>
            </div>
            <TextInput onChange={(e) => setTitle(e.target.value)} name='title' value={title} type="text" required />
          </div>
          {/* pcs */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label value="Pcs " className='text-lg'/>
            </div>
            <TextInput onChange={(e) => setPcs(e.target.value)} name='pcs' value={pcs} type="text"  required />
          </div>
        </div>
        {/* third row */}
        <div className='flex gap-8'>
          {/* price */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label value="Price " className='text-lg'/>
            </div>
            <TextInput onChange={(e) => setPrice(e.target.value)} name='price' value={price} type="text" required />
          </div>
        </div>

        <Button className='mt-5' type="submit" onClick={hangleUpdate}>Update Product</Button>

      </form>

    </div>
  )
};
  
  
  export default EditElec
  
  
