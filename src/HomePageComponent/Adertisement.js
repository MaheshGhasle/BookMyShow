import Charity from "../Images/charity.avif"
import Crickets from "../Images/crickets.avif"
import Panmasala from "../Images/pan-masala.avif"
import Prebook from "../Images/pre-book.avif"
import Tickets from "../Images/tickets.avif"

import "../HomePageComponent/Adertisement.css"

function Adertisement() {
    return (
        <div className="carousel-container">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={Charity} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Crickets} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Panmasala} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Prebook} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={Tickets} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Adertisement;