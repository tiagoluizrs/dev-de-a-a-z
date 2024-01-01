import React from 'react';
import './Home.css';
import wallpaper from '../../assets/images/wallpaper.jpg';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div
                    className="wallpaper"
                    style={{
                        backgroundImage: `url(${wallpaper})`,
                        /* Outras propriedades de estilo, como largura, altura, posição, etc. */
                    }}
                ></div>
                <div>
                    <span className="code">Olá mundo_</span>
                    <h1>
                        Saia do 0 ao profissional e entre para o mercado de <span>programação</span> sem sair de casa de forma prática.
                    </h1>
                    <h3>
                        Um site completo onde você aprenderá a programar sem sair de casa e se tornará apto ao seu primeiro emprego ou aquela tão sonhada promoção.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Home;