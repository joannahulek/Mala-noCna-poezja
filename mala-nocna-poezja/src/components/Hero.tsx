import './Hero.css';
import mnp_title from '../assets/MNP_title.jpg';

export default function Hero() {
    return (
        <div className="hero">
            <h1>Jarosław Jasielec</h1>
            <div className="hero-grid">
                <img src={mnp_title} alt="Mała noCna poezja"/>
                <div className="cta">
                        <a href="https://allegro.pl/oferta/tytus-romek-i-atomek-superkolekcja-25-ksiag-pakiet-nowy-10420463053" target="_blank">
                            <button>Zamów tomik</button>
                        </a>
                </div>
            </div>
        </div>
    );
}
