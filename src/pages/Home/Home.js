import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import wallpaper from '../../assets/images/wallpaper.jpg';
import whatsApplogo from '../../assets/images/whatsapp-logo.svg';

const Home = () => {
    return (
        <div className="bannerBody">
            <div className="banner">
                <div
                    className="wallpaper"
                    style={{
                        backgroundImage: `url(${wallpaper})`,
                        /* Outras propriedades de estilo, como largura, altura, posição, etc. */
                    }}
                />
                <div className="bannerCenter">
                    <div className="text">
                        <span className="code">Olá mundo_</span>
                        <h1>
                            Saia do 0 ao profissional e entre para o mercado de <span>programação</span> sem sair de casa de forma prática.
                        </h1>
                        <h3>
                            Um site completo onde você aprenderá a programar sem sair de casa e se tornará apto ao seu primeiro emprego ou aquela tão sonhada promoção.
                        </h3>
                        <div className="leftSign">
                            <div className="sign">
                                <div className="leftButton">
                                    <Link to="/courses">
                                        <span>VER CURSOS</span>
                                        <span className="arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-2xl text-gray-100"><path d="m9 18 6-6-6-6"></path></svg>    
                                        </span>
                                    </Link>
                                </div>
                                <span className="pipe"/>
                                <div className="rightButton">
                                    <a href="https://api.whatsapp.com/send?phone=5521989889438&text=Ol%C3%A1.%20Tenho%20interesse%20em%20aulas%20particulares." target="_blank">
                                        <span className="wicon">
                                            <svg class="fill-success-light" fill="none" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M16.629 4.008a8.607 8.607 0 00-6.133-2.543A8.682 8.682 0 002.98 14.473l-1.23 4.492 4.598-1.207a8.646 8.646 0 004.144 1.055h.004c4.777 0 8.754-3.891 8.754-8.672 0-2.317-.984-4.493-2.621-6.133zm-6.133 13.344a7.195 7.195 0 01-3.672-1.004l-.261-.157-2.727.715.727-2.66-.172-.273a7.184 7.184 0 01-1.102-3.836c0-3.973 3.234-7.207 7.211-7.207 1.926 0 3.734.75 5.094 2.113 1.36 1.363 2.195 3.172 2.191 5.098 0 3.976-3.316 7.21-7.289 7.21zm3.953-5.399c-.215-.11-1.281-.633-1.48-.703-.2-.074-.344-.11-.489.11-.144.218-.558.703-.687.85-.125.145-.254.165-.469.056-1.273-.637-2.11-1.137-2.949-2.579-.223-.382.223-.355.637-1.183.07-.145.035-.27-.02-.379-.055-.11-.488-1.176-.668-1.61-.176-.421-.355-.363-.488-.37-.125-.008-.27-.008-.414-.008a.803.803 0 00-.578.27c-.2.218-.758.741-.758 1.808 0 1.066.777 2.098.883 2.242.11.145 1.527 2.332 3.703 3.273 1.375.594 1.914.645 2.601.543.418-.062 1.282-.523 1.461-1.03.18-.509.18-.942.125-1.032-.05-.098-.195-.152-.41-.258z"></path></svg>
                                        </span>
                                        <span className="help">
                                            <span>
                                                ALGUMA DÚVIDA?
                                            </span>
                                            <span>
                                                FALE COMIGO!
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;