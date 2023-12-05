import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (

        
        <nav className='menu'>
        {/* icon goes here  TODO: add icons */}
            <ul className='menu-ul'>
                <li><Link className='menu-items' to='/'>Home</Link></li>
                <li><Link className='menu-items' to='/About'>About</Link></li>
                <li><Link className='menu-items' to='/Gallery'>Gallery</Link></li>
                <li><Link className='menu-items' to='/Contact'>Contact</Link></li>
            </ul>
        </nav>
        
    )
}

export default Navbar