import React from 'react'
import { FaAlignCenter } from 'react-icons/fa'
import styled from 'styled-components'
export default function Add({closeModel}) {
  return (
    <>
      <Wrapper className='Model-wrapper' >
        <div className='container'>
            <div className='header'>
            <h3>Add Annoucement</h3>
            <p onClick={closeModel}>X</p>
            </div>
            
            <div>
                <label htmlFor="">Enter Date</label>
                <input type="date" />
            </div>
            <div>
                <label htmlFor="">Enter announcement</label>
                <input type="text" />
            </div>
            <button type='submit' className='addbtn'>Add Annoucement</button>
            
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

        h3{
        width:100%;
        color:var(--Yellow);
    }
p{
    padding:2px 5px;
    cursor: pointer;
    border:2px solid var(--Yellow);
    border-radius:5px;
}
    }
    
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
