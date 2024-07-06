import '../home/home.css'
import useSwipe from '../useSwipe';

const Home = () => {
    useSwipe();

    const title = "Kosta mästerskapen -";

    return (
        <div className="home">
            <div className="home-content">
                <h1>{title}</h1>
                <h2>Kostas golf mästerskap<br></br> med över 20 medlemmar</h2>
                <p>Se aktuella medlemmar</p>
                <a href="/members"><button>Klicka här</button></a>
            </div>
        </div>
    );
}

export default Home;
