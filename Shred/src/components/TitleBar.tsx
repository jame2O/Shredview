import "../index.css";
import logoImg from "../assets/ShredLogo.png";

function TitleBar() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1 id="creator">Made by james2O</h1>
                </div>
                <div className="col">
                    <img className="Logo" src={logoImg} width="150" />
                    <h1 className="Title">Shred.</h1> 
                </div>
            </div>
        </div>
    )
}

export default TitleBar;