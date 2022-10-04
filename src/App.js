
function App() {

    const handleClick = event => {
    //     // 👇️ toggle isActive state on click
    event.currentTarget.classList.toggle('active');
       };
     
    return (
        <div className="App">
            <ul className="menu" onClick={handleClick}>
                <div className="toggle" onClick={handleClick}><ion-icon name="add-outline"></ion-icon></div>
                <li className="li-1" style={{ color: "#ff2972" }}>
                    <a href="#"><ion-icon name="home-outline"></ion-icon></a>
                </li>
                <li className="li-2" style={{ color: "#fee800" }}>
                    <a href="#"><ion-icon name="person-outline"></ion-icon></a>
                </li>
                <li className="li-3" style={{ color: "#04fc43" }}>
                    <a href="#"><ion-icon name="settings-outline"></ion-icon></a>
                </li>
                <li className="li-4" style={{ color: "#fe00f1" }}>
                    <a href="#"><ion-icon name="mail-outline"></ion-icon></a>
                </li>
                <li className="li-5" style={{ color: "#00b0fe" }}>
                    <a href="#"><ion-icon name="key-outline"></ion-icon></a>
                </li>
                <li className="li-6" style={{ color: "#fea600" }}>
                    <a href="#"><ion-icon name="videocam-outline"></ion-icon></a>
                </li>
                <li className="li-7" style={{ color: "#a529ff" }}>
                    <a href="#"><ion-icon name="game-controller-outline"></ion-icon></a>
                </li>
                <li className="li-8" style={{ color: "#01bdab" }}>
                    <a href="#"><ion-icon name="camera-outline"></ion-icon></a>
                </li>
            </ul>
        </div>
    );
}

export default App;
