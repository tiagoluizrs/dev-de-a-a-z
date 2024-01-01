import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return <header>
        <nav>
            <ul>
                <li className='logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </li>
                <li>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/testimonials">Depoimentos</Link>
                        </li>
                        <li>
                            <Link to="/courses">Cursos</Link>
                        </li>
                        <span className="pipe"/>
                        <li className="rightButton">
                            <a href="https://api.whatsapp.com/send?phone=5521989889438&text=Ol%C3%A1.%20Tenho%20interesse%20em%20aulas%20particulares." target="_blank">
                                <span>
                                    CURSOS
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-2xl text-gray-100"><path d="m9 18 6-6-6-6"></path></svg>    
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>

}

export default Header;