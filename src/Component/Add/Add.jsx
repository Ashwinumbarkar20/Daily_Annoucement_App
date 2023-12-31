import React, { useState } from 'react'
import { FaAlignCenter } from 'react-icons/fa'
import { addDoc, collection } from 'firebase/firestore';
import db from '../../Firebase.js';
import styled from 'styled-components'

export default function Add({closeModel,closeAddModel}) {

const [newAnnoucement,setNewAnnouncement]=useState({
    CreatedAt: new Date(),
    Announcement:"",
})
    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        try{
            const docRef = await addDoc(collection(db, 'AnnoucementDB'), {
                //CreatedAt: new Date(), 
                ...newAnnoucement,
              
              });
        
              console.log('Document written with ID: ', docRef.id);                  
            closeAddModel();
        }
        catch(e){console.log(e)}
    }
    const handleChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setNewAnnouncement((previous)=>({...previous,[name]:value}))
    }

  return (
    <>
      <Wrapper className='Model-wrapper' >
        <div className='container'>
            <div className='header'>
            <h3>Add Annoucement</h3>
            <p onClick={closeModel}>X</p>
            </div>
            <form onSubmit={handleFormSubmit}>
            {/* <div>
              <p >`Date: ${newAnnoucement.CreatedAt}`</p> 
              
            </div> */}
            <div>
                <label htmlFor="">Enter Announcement</label>
                <input type="text" name="Announcement" onChange={handleChange} value={newAnnoucement.Announcement}  />
            </div>
            <button type='submit' className='addbtn'>Add Annoucement</button>
            </form>
        </div>
      </Wrapper>
     
    </>
  )
}

const Wrapper=styled.div`
    
    position:fixed;
    top:0px;
    right:0px;
    left:0px;
    bottom:0px;
    background-color:#b3cde0;


.container{
    position:fixed;
    width:500px;
    height:350px;
   border-radius:8px;
    background-color:var(--Blue);
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:10px;
    align-items:center;
    border:1px solid var(--Yellow);
    padding:5px;

    .header{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;

        h3
        {
            width:100%;
            color:var(--Yellow);
        }
        p
        {
            padding:2px 5px;
            cursor: pointer;
            border:2px solid var(--Yellow);
            border-radius:5px;
        }
    }
    form{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

    width:100%;
        div{
  padding:10px;
  width:80%;
  display:flex;
  gap:8px;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  color:var(--Yellow);  
  input,label{
    
    width:100%;
    padding:5px;
    border-radius:5px;
  }
      
    }
    }

    .addbtn{
        padding:5px;
        color:var(--Blue);
        border:1px solid var(--Yellow);
        background-color:var(--Yellow);
        border-radius:5px;
        cursor: pointer;
        transition: all 0.3s ease;
&:hover{
    filter:brightness(1.10);    
    box-shadow:5px 5px 6px rgba(255,255,1,0.3)
}
    }
}
`
