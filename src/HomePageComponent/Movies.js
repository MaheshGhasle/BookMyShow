
import badboy from "../Images/Movies-image/bad-boy.avif"
import kisi from "../Images/Movies-image/bhai-jaan.avif"
import ponni from "../Images/Movies-image/ps-2.avif"
import maharashtra from "../Images/Movies-image/maharashtra-shair.avif"
import fast from "../Images/Movies-image/fast-x.avif"

import "../HomePageComponent/Movies.css"

function Movies() {
    return (
        <div className="movies-container">
            <div className="recommended-movies">
                <h3 className="hh-3">Recommended Movies</h3>
                <h6 className="hh-6">
                    <a href="#">See All</a>
                </h6>
            </div>

            <div>
                {/* <a href="#">
                    <div class="card" style={{ width:"14rem" }}>

                        <img src={badboy} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                </a> */}

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" style={{ width: "16rem",height:"466px" }}>
                        <a href="#">
                            <div class="card h-100">
                                <img src={badboy} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Bad Boy (Hindi)</h5>
                                    <p class="card-text">Drama/Romantic</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div class="col" style={{ width: "16rem",height:"379px" }}>
                        <a href="#">
                            <div class="card h-100">
                                <img src={kisi} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Kisi Ka bhai Kisi Ki Jaan</h5>
                                    <p class="card-text">Action/Comedy/Drama</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div class="col" style={{ width: "16rem" }}>
                        <a href="#">
                            <div class="card h-100">
                                <img src={ponni} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ponniyin Selvan - Part 2</h5>
                                    <p class="card-text">Action/Adventure/Drama/Historical</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div class="col" style={{ width: "16rem" }}>
                        <a href="#">
                            <div class="card h-100">
                                <img src={maharashtra} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Maharashtra Shahir</h5>
                                    <p class="card-text">Biography/Drama</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div class="col" style={{ width: "16rem"}}>
                        <a href="#">
                            <div class="card h-100">
                                <img src={fast} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Fast X</h5>
                                    <p class="card-text">Action/Adventure/Crime/Thriller</p>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Movies;