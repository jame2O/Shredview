import "../index.css";
import logoImg from "../assets/logo.svg";

function TitleBar() {
    return (
            <div className="titleBar">
                <div className="row">
                    <div className="col">
                        <img id="logo" width="200" src={logoImg}/>
                        <h1 id="creator">Made by james2O</h1>
                    </div>
                </div>
            </div>
            
    )
}

export default TitleBar;