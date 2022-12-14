import React from 'react'
import './footer.css'

export const Footer = () => {
  let FooterStyle={
     padding:'30px',  
  }
  return (
    <div >
    <footer className='my-6 text-light bg-dark'   style={FooterStyle}>
      <center><h4>Copyright ; WebApp</h4></center>
    </footer>
    </div>
    )
}
