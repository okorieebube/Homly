import React, {Component} from 'react'

import Nav from './components/shared/Nav'
import Header from './components/shared/Header'

export default class Listings extends Component {
   render(){
        return (
            <div className="wrapper dashboard-wrapper">
                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Nav />

                    <div className="page-content">
                        <Header />

                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                                <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                                <div className="mr-0 mr-md-auto">
                                    <h2 className="mb-0 text-heading fs-22 lh-15">My Properties<span className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">29</span>
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                                <div className="form-inline justify-content-md-end mx-n2">
                                    <div className="p-2">
                                    <div className="input-group input-group-lg bg-white border">
                                        <div className="input-group-prepend">
                                        <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search" /></button>
                                        </div>
                                        <input type="text" className="form-control bg-transparent border-0 shadow-none text-body" placeholder="Search listing" name="search" />
                                    </div>
                                    </div>
                                    <div className="p-2">
                                    <div className="input-group input-group-lg bg-white border">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-transparent letter-spacing-093 border-0 pr-0"><i className="far fa-align-left mr-2" ></i> Sort by:</span>
                                        </div>
                                        <select className="form-control bg-transparent pl-0 selectpicker d-flex align-items-center sortby" name="sort-by" data-style="bg-transparent px-1 py-0 lh-1 font-weight-600 text-body" value="" id="status">
                                        <option>Alphabet</option>
                                        <option>Price - Low to High</option>
                                        <option>Price - High to Low</option>
                                        <option>Date - Old to New</option>
                                        <option>Date - New to Old</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="table-responsive">
                                <table className="table table-hover bg-white border rounded-lg">
                                    <thead className="thead-sm thead-black">
                                    <tr>
                                        <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Listing title</th>
                                        <th scope="col" className="border-top-0 pt-5 pb-4">Date Published</th>
                                        <th scope="col" className="border-top-0 pt-5 pb-4">Status</th>
                                        <th scope="col" className="border-top-0 pt-5 pb-4">View</th>
                                        <th scope="col" className="border-top-0 pt-5 pb-4">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="shadow-hover-xs-2 bg-hover-white">
                                        <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                            <a href="single-property-1.html">
                                                <img src="images/my-properties-01.jpg" alt="Home in Metric Way" />
                                            </a>
                                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                                            </div>
                                            <div className="media-body">
                                            <a href="single-property-1.html" className="text-dark hover-primary">
                                                <h5 className="fs-16 mb-0 lh-18">Home in Metric Way</h5>
                                            </a>
                                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                                            <span className="text-gray-light">/month</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-middle">30 December, 2019</td>
                                        <td className="align-middle">
                                        <span className="badge text-capitalize font-weight-normal fs-12 badge-yellow">pending</span>
                                        </td>
                                        <td className="align-middle">2049</td>
                                        <td className="align-middle">
                                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
                                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
                                        </td>
                                    </tr>
                                    <tr className="shadow-hover-xs-2 bg-hover-white">
                                        <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                            <a href="single-property-1.html">
                                                <img src="images/my-properties-02.jpg" alt="Garden Gingerbread House" />
                                            </a>
                                            <span className="badge badge-primary position-absolute pos-fixed-top">for sale</span>
                                            </div>
                                            <div className="media-body">
                                            <a href="single-property-1.html" className="text-dark hover-primary">
                                                <h5 className="fs-16 mb-0 lh-18">Garden Gingerbread House</h5>
                                            </a>
                                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                                            <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-middle">30 December, 2019</td>
                                        <td className="align-middle">
                                        <span className="badge text-capitalize font-weight-normal fs-12 badge-pink">published</span>
                                        </td>
                                        <td className="align-middle">2049</td>
                                        <td className="align-middle">
                                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
                                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
                                        </td>
                                    </tr>
                                    <tr className="shadow-hover-xs-2 bg-hover-white">
                                        <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                            <a href="single-property-1.html">
                                                <img src="images/my-properties-03.jpg" alt="Affordable Urban House" />
                                            </a>
                                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                                            </div>
                                            <div className="media-body">
                                            <a href="single-property-1.html" className="text-dark hover-primary">
                                                <h5 className="fs-16 mb-0 lh-18">Affordable Urban House</h5>
                                            </a>
                                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                                            <span className="text-gray-light">/month</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-middle">30 December, 2019</td>
                                        <td className="align-middle">
                                        <span className="badge text-capitalize font-weight-normal fs-12 badge-pink">processing</span>
                                        </td>
                                        <td className="align-middle">2049</td>
                                        <td className="align-middle">
                                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
                                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
                                        </td>
                                    </tr>
                                    <tr className="shadow-hover-xs-2 bg-hover-white">
                                        <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                            <a href="single-property-1.html">
                                                <img src="images/my-properties-04.jpg" alt="Villa on Hollywood Boulevard" />
                                            </a>
                                            <span className="badge badge-primary position-absolute pos-fixed-top">for sale</span>
                                            </div>
                                            <div className="media-body">
                                            <a href="single-property-1.html" className="text-dark hover-primary">
                                                <h5 className="fs-16 mb-0 lh-18">Villa on Hollywood Boulevard</h5>
                                            </a>
                                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                                            <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-middle">30 December, 2019</td>
                                        <td className="align-middle">
                                        <span className="badge text-capitalize font-weight-normal fs-12 badge-pink">published</span>
                                        </td>
                                        <td className="align-middle">2049</td>
                                        <td className="align-middle">
                                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
                                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
                                        </td>
                                    </tr>
                                    <tr className="shadow-hover-xs-2 bg-hover-white">
                                        <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                            <a href="single-property-1.html">
                                                <img src="images/my-properties-03.jpg" alt="Explore Old Barcelon" />
                                            </a>
                                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                                            </div>
                                            <div className="media-body">
                                            <a href="single-property-1.html" className="text-dark hover-primary">
                                                <h5 className="fs-16 mb-0 lh-18">Explore Old Barcelon</h5>
                                            </a>
                                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                                            <span className="text-gray-light">/month</span>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-middle">30 December, 2019</td>
                                        <td className="align-middle">
                                        <span className="badge text-capitalize font-weight-normal fs-12 badge-yellow">pending</span>
                                        </td>
                                        <td className="align-middle">2049</td>
                                        <td className="align-middle">
                                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i className="fal fa-pencil-alt" /></a>
                                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i className="fal fa-trash-alt" /></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                <nav className="mt-6">
                                <ul className="pagination rounded-active justify-content-center">
                                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">...</li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                                </ul>
                                </nav>
                                <div className="text-center mt-2">6-10 of 29 Results</div>
                            </div>
                            </main>

                    </div>

                </div>
            </div>
        )
   }
}
