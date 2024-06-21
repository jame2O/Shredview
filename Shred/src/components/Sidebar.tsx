import {useState} from "react";
import "../index.css";
import logo from "../assets/ShredLogo.svg";

function Sidebar() {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h2>Find Trails: </h2>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">#</span>
                <input type="text" className="searchBox" placeholder="Trail Name / Location" aria-label="searchBox" aria-describedby="basic-addon1"/>
            </div>
            <div>
                <ul className="options">
                    <li className="input-group mb-3">
                        <span className="input-group" id="basic-addon1">Gradient</span>
                        <input className="form-check-input mt-0" id="gradChkBox" type="checkbox" value="" aria-label="Checkbox for Gradient"/>
                    </li>
                    <li>Surface Type</li>
                    <li>Current Elevation</li>
                    <li>Effort Score</li>
                    <li>Features</li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;