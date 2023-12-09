import React from 'react'
import styled from 'styled-components'
import { MdAddCircle } from "react-icons/md";
import  { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'; 
import db from '../../Firebase.js';
import AnnouncementCard from '../Annoucementcard/AnnouncementCard.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from '../Add/Add.jsx';

export default function Search() {
    const [data, setData] = useState([]);
    const [date,setdate]=useState();
    const [Alldata,setAllData]=useState([]);
    const [filtered,setFiltered]=useState([]); 
    const[add,setAdd]=useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'AnnoucementDB'));
            const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(documents);
            setAllData(documents);
            setFiltered(documents);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      const handlechagnge=(e)=>{
const datestring=(e.target.value);
  
setdate(datestring);

if(!datestring){
  setFiltered(Alldata)
}
else{
  const converteddate=new Date(datestring).toLocaleDateString()
  const filterdata1 = data.filter((item) => {
    const itemDate = item.CreatedAt.toDate().toLocaleDateString();
    return itemDate === converteddate;
  });
  setFiltered(filterdata1);
} 

}
  const showModel=()=>{setAdd(true)}
  const closeModel=()=>{
    setAdd(false)
   }

      const closeAddModel=()=>{
        setAdd(false)
        toast.success('Announcement has been Added', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });}

  return (
        <>
             
    <Maindiv >
    <div className='Serach'>
    <button type="button" onClick={()=>{setFiltered(Alldata)}}>Show all</button>
    <span>Select date </span><input type="date" onChange={handlechagnge} value={date} name="Select_date" id="" />
      
     </div>

    <MdAddCircle fontSize="24px" className='addbtn' onClick={showModel} title='Add the Announcement'/>
    
    </Maindiv>     
    <Annoucements >
{
  (!filtered || filtered.length===0)
  ? (<p className='nodata'>No Annoucement Found</p>)
  : (filtered.map((a)=>{return (<AnnouncementCard key={a.id} annoucement={a}/>)}))
}
    </Annoucements>

 {add &&<Add closeModel={closeModel} closeAddModel={closeAddModel}/>}  
  <ToastContainer />
    </>
  )
}
const Maindiv=styled.div`

width:800px;
margin:20px auto;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

gap:10px;

.Serach{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:18px;
    span{
        color:var(--Blue);
        font-weight:500;
    }
    button{
  padding:5px;
  font-size:18px;
background-color:transparent;
color:var(--Blue);
width:100px;
border:1px solid var(--Blue);
border-radius:5px;
cursor: pointer;
box-shadow:2px 2px 6px rgba(0,0,0,0.3);
transition: all 0.3s ease;
&:hover{
background-color:var(--Blue);
color:var(--Yellow);

}
}
    input{
        padding:10px;
        color:var(--Yellow);
        background-color:var(--Blue);
        border-radius:10px;
        border:2px Solid var(--Yellow);
    }
}
s-bar{
    position:absolute;
    
}
.addbtn{
        color:var(--Yellow);
         background-color:var(--Blue);
         border:1px solid var(--Yellow);
         border-radius:20px;
         transition:all 0.5s ease;
         cursor: pointer;
       &:hover{
        background-color:var(--Yellow);
        color:var(--Blue);;
       } 
        
    }
    
`
const Annoucements=styled.div`
display:flex;
flex-direction:column;
gap:18px;
.nodata{
  width:500px;
margin:0 auto;
  padding:10px;
  display:grid;
  place-items: center;
  font-weight:bolder;
  background-color:var(--Yellow);
  border:2px solid var(--Blue);
border-radius:10px;
  color:var(--Blue);
}
`
