import axios from 'axios';

import { Table } from 'flowbite-react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ManageElec() {

  const [allElectronics, setElectronics] = useState([]);

  // get all data
  const handleElectronics = () => {
   axios.get("https://server-z329.onrender.com/electronic/").then((response) => {
     setElectronics(response.data)
   }).catch((error) => console.log(error))
  }

  useEffect(()=> {
   handleElectronics();
  },[])

  // delete data
  const handleDelete = (id) => {
    fetch(`https://server-z329.onrender.com/electronic/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(() => {
      toast("Deleted Successfuly...", {
        position: "top-right",
        autoClose: 3000,
    });
    handleElectronics()
    });
  
  }

  return (
    <div className='px-4 my-12 lg:px-24 '>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Products</h2>
       {/* table */}
       <Table className='lg:w-[900px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Pcs</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit and Delete</span> 
          </Table.HeadCell>
        </Table.Head>
          {
            allElectronics.map((elec,index)=>   <Table.Body className="divide-y" key={elec._id}>
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index +1}
            </Table.Cell>
            <Table.Cell>{elec.name}</Table.Cell>
            <Table.Cell>{elec.title}</Table.Cell>
            <Table.Cell>{elec.pcs}</Table.Cell>
            <Table.Cell>${elec.price}</Table.Cell>
            <Table.Cell>

              <Link to={`/dashboard/edit/${elec._id}`} className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit 
              </Link>
              <button onClick={()=> handleDelete(elec._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-500'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>)
          }
  
      </Table>
    </div>
  )
}

export default ManageElec