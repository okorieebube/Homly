import React from 'react'

export default function ListingGridCard () {
    return (
        <div className="card border-0" data-animate="fadeInUp">
            <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                <img src="images/properties-grid-35.jpg" alt="Home in Metric Way" />

                <div className="card-img-overlay d-flex flex-column">
                    <div><span className="badge badge-primary">For Sale</span></div>
                    <div className="mt-auto d-flex hover-image">
                    <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                        <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                        <a href="#" className="text-white hover-primary">
                            <i className="far fa-images" /><span className="pl-1">9</span>
                        </a>
                        </li>
                        <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                        <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle" /><span className="pl-1">2</span>
                        </a>
                        </li>
                    </ul>
                    <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                        <a href="#" className="text-white fs-20 hover-primary">
                            <i className="far fa-heart" />
                        </a>
                        </li>
                        <li className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                        <a href="#" className="text-white fs-20 hover-primary">
                            <i className="fas fa-exchange-alt" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
