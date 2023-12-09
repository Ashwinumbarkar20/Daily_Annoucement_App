import React from 'react'
import styled from 'styled-components'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export default function AnnouncementCard({annoucement}) {
  return (
    <>
        <Card className='card'>
        <div className='content'>
        <p className='Date'><span>Date: </span>{annoucement.CreatedAt.toDate().toLocaleDateString()}</p>
        <p className='Annoucement'><span>Annoucement: </span> {annoucement.Announcement}</p>
        </div>
        <div className='icons'>
        <MdDelete className='icon' />
        <FaEdit className='icon'/>

        </div>
            </Card>

    </>
  )
}
const Card=styled.div`
width:500px;
margin:0 auto;
background-color:#EEC759;
color:var(--Blue);
padding:5px 15px;
border:2px solid var(--Blue);
border-radius:10px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
gap:32px;
span{
    Color:Black;
    font-size:12px;
    padding:2px;
    font-weight:800;

}
.icon{
  color:var(--Blue);
  font-size:18px;
  cursor: pointer;
  padding:5px;
  border:1px solid var(--Yellow);
  border-radius:10px;
  box-shadow:0px 0px 0px rgba(0,0,0,0.3), inset -3px  -3px  6px rgba(0,0,0,0.3) ;
  transition:all 0.3s ease-in-out;
  &:hover{
  filter:brightness(1.19);
  transform:scale(1.19);
  
  }
}
.icons{
  display:flex;
gap:18px;
}

`
