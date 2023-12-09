import React from 'react'
import styled from 'styled-components'
import { TfiAnnouncement } from "react-icons/tfi";
import '../../index.css'

export default function Header() {
  return (
    <>
<Maindiv className='container'>
<nav className='Navbar'>
<div><TfiAnnouncement />
</div>
<div><span>Daily Annoucement</span></div>
</nav>

</Maindiv>
    </>
  )
}
const Maindiv=styled.div`
width:750px;
padding:10px;
background-color:var(--Blue);
color:var(--Yellow);
border-radius:5px;
border-radius:1px solid var(--Yellow);
margin-bottom:24px;
.Navbar{
display:flex;
justify-content:center;
align-items:center;
gap:5px;
}
`