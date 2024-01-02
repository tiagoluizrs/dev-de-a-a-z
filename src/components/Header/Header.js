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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-300 group-hover:text-rocketseat-light"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
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