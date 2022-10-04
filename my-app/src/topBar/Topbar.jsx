import React from 'react';
import './topBar.css'

export default function Topbar() {
  return (
    <>
        <div className='topBar'>
            <div className='topIconContainer'>
                <div className='topIcon'><ion-icon name="logo-facebook"></ion-icon></div>
                <div className='topIcon'><ion-icon name="logo-instagram"></ion-icon></div>
                <div  className='topIcon'><ion-icon name="logo-whatsapp"></ion-icon></div>
                <div  className='topIcon'><ion-icon name="logo-linkedin"></ion-icon></div>             
            </div>
            <div className='navigationList'>
                <ul>
                    <li>HOME</li>
                    <li>CONTACT</li>
                    <li>ABOUT</li>
                    <li>WRITE</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className='searchIcon'>
                 <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    </>
  )
}
