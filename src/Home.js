import Slider from './Slider';
// import logo from './logo.svg';

function Home() {
    return (
        <>
            <h1>HOME</h1>
            <p>React Practice Site coding by MNN.</p>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Slider></Slider>
            </header>
        </>
    )
}

export default Home;