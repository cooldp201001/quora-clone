import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({dialogBoxState,setShowDialogBox}) => {

  const handleButtonClick = () => {
    if(dialogBoxState)
      setShowDialogBox(false)
    else
    setShowDialogBox(true)
  };

  return (
    <nav className='navbar' >
      <h2 className="quoraHeading">Quora</h2>
      <Link className='navlink' to="/"><i className="fa-solid fa-house"></i></Link>
      <Link className='navlink' to=""><i className="fa-solid fa-rectangle-list"></i></Link>
      <Link className='navlink' to=""><i className="fa-solid fa-pen-to-square"></i></Link>
      <Link className='navlink' to=""><i className="fa-solid fa-people-group"></i></Link>
      <Link className='navlink' to="/notification"><i className="fa-solid fa-bell"></i></Link>
      <div className='searchBox'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className='searchInput' type="text" placeholder='Search Quora' />
      </div>
      <button className='PremiumBtn'>Try Quora+</button>
      <Link to="" className=' navlink ProfileIcon'><img src="src\images\profile.png" alt="profile" /></Link>
      <Link className='navlink' to="" > <i className="fa-solid fa-globe "></i></Link>

      <div className='addQuestionContainer'>
        <button className='addBtn ' onClick={()=>handleButtonClick()} >Add question</button>
        <button className='menuBtn ' ><i className="fa-solid fa-chevron-down"></i></button>
       
   
      </div>
    </nav>
  )
}

export default Navbar