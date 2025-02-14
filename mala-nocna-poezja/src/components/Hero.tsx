import './Hero.css';
import mnp_title from '../assets/MNP_title.jpg';

export default function Hero() {
    return (
        <div className="hero">
            <h1>Jarosław Jasielec</h1>
                <img src={mnp_title} alt="Mała noCna poezja"/>
                <button>Zamów tomik</button>
        </div>
    );
}
