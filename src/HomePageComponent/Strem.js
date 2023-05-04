import "../HomePageComponent/Strem.css";
import StremImage from "../Images/stream-leadin-web-collection-202210241242.png"

function Strem(){
    return(
        <div className="strem-container">
            <a href="#">
            <div className="strem-content">
            <img src={StremImage} alt="..." />
               
            </div>
            </a>

        </div>
    )
}

export default Strem;