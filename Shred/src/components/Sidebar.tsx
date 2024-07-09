import {useState} from "react";
import "../index.css";
import gradientIcon from "../assets/gradientIcon.png";
import stIcon from "../assets/surfaceType.svg";
import elevationIcon from "../assets/elevation.png";
import featuresIcon from "../assets/features.svg";
import effortScoreIcon from "../assets/effortScore.svg";




function Sidebar() {
    const [] = useState(false);
    return (
        <div>
             
            <h2>Display Options: </h2>
            <div className="input-group mb-3">
            </div>
            <div>
                <ul className="options">
                    <li className="input-group">
                        <span id="dataLbl" className="input-group-text">
                            <img width="20" src={gradientIcon} />
                            Gradient
                            <input className="form-check-input" type="checkbox" value="" id="gradChkBox" />
                        </span>
                    </li>
                    <li className="input-group">
                        <span id="dataLbl" className="input-group-text">
                            <img width="20" src={stIcon} />
                            Surface Type
                            <input className="form-check-input" type="checkbox" value="" id="stChkBox" />
                        </span>
                    </li>
                    <li className="input-group">
                        <span id="dataLbl" className="input-group-text">
                            <img width="20" src={elevationIcon} />
                            Elevation
                            <input className="form-check-input" type="checkbox" value="" id="elevationChkBox" />
                        </span>
                    </li>
                    <li className="input-group">
                        <span id="dataLbl" className="input-group-text">
                            <img width="20" src={effortScoreIcon} />
                            Effort Score
                            <input className="form-check-input" type="checkbox" value="" id="effortChkBox" />
                        </span>
                    </li>
                    <li className="input-group">
                        <span id="dataLbl" className="input-group-text">
                            <img width="20" src={featuresIcon} />
                            Features
                            <input className="form-check-input" type="checkbox" value="" id="featuresChkBox" />
                        </span>
                    </li>
                </ul>

            </div>
        </div>
    );
}
export default Sidebar;