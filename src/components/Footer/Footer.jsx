import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return <footer className="footer">
        <nav>
            <ul>
                <li className='logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </li>
                <li className="social-links">
                    <ul>
                        <li>
                            <a className="link" target="_blank" href="https://www.instagram.com/tiagoluizrs/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-300 group-hover:text-rocketseat-light"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            </a>
                        </li>
                        <li>
                            <a className="link" target="_blank" href="https://www.facebook.com/devdeaaz">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-300 group-hover:text-rocketseat-light"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a className="link" target="_blank" href="https://www.youtube.com/@devdeaaz">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-300 group-hover:text-rocketseat-light"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <span className="bar"/>
        <div>
            <span>Dev de A a Z© 2024 - Todos os direitos reservados</span>
        </div>
    </footer>
}

export default Footer;