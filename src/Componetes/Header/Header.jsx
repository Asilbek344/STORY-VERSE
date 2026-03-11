import React, {useState} from 'react'
import "./Header.css"
import Logo from "./Imeges/Logo.jpg"
import { Link } from 'react-router-dom'

const Header = () => {

const [open,setOpen] = useState(false)

return (
<>
<header>
    <div className="container header-cn">
        <img className='header-jpg' src={Logo} alt="" />

        <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Contact">Contact</Link></li>
        </ul>

        <button className='btn-2' onClick={()=>setOpen(true)}>
            Premium
        </button>

    </div>
</header>

{open && (

<div className='premium-modal'>
    <div className='modal-box'>

        <h2>Premium Plan</h2>

        <p>
        Reklamalarsiz ko‘rish 🎬 <br/>
        4K formatda filmlar 📺 <br/>
        Bepul yuklab olish ⬇️
        </p>

        <div className="price">3 kunlik — 1$</div>
        <div className="price">6 kunlik — 3$</div>
        <div className="price">24 kunlik — 12$</div>
        <div className="price">1 oylik — 24$</div>

        <button className='close-btn' onClick={()=>setOpen(false)}>
            Close
        </button>

    </div>
</div>

)}

</>
)
}

export default Header