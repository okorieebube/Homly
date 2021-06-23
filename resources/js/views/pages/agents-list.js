import React, { Component } from 'react'

import Nav  from "../shared/components/navbar/navbar";
import Footer from '../shared/components/footer/footer';

export default class AgentsList extends Component {
    render(){

        return (
            <div>
                <Nav />
    
                <main id="content">
                    <section className="pb-6 page-title shadow">
                        <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Agents</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Agents List</li>
                            </ol>
                        </nav>
                        <h1 className="fs-30 lh-16 mb-1 text-dark font-weight-600">Agents </h1>
                        </div>
                    </section>
                    <section className="pt-8 pb-13 bg-gray-01">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-4 primary-sidebar sidebar-sticky order-1 order-lg-0" id="sidebar">
                            <div className="primary-sidebar-inner">
                                <div className="card mb-4">
                                <div className="card-body px-6 pt-5 pb-6">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-3">Search</h4>
                                    <form>
                                    <div className="form-group mb-2">
                                        <select className="form-control border-0 shadow-none selectpicker" name="company" title="Company" data-style="btn-lg px-3">
                                        <option>Google</option>
                                        <option>Facebook</option>
                                        </select>
                                    </div>
                                    <div className="form-row mb-2">
                                        <div className="col-6 form-group">
                                        <select className="form-control selectpicker border-0" name="language" title="Language" data-style="btn-lg rounded-lg px-3">
                                            <option>English</option>
                                            <option>France</option>
                                        </select>
                                        </div>
                                        <div className="col-6 form-group">
                                        <select className="form-control selectpicker border-0" name="region" title="Region" data-style="btn-lg rounded-lg px-3">
                                            <option>Austin</option>
                                            <option>Boston</option>
                                            <option>Chicago</option>
                                            <option>Denver</option>
                                            <option>Los Angeles</option>
                                            <option>New York</option>
                                            <option>San Francisco</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control form-control-lg border-0" name="search" placeholder="Search by agent’s name..." />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                                        Search
                                    </button>
                                    </form>
                                </div>
                                </div>
                                <div className="card mb-4">
                                <div className="card-body text-center pt-7 pb-6 px-0">
                                    <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                                    <div className="text-dark mb-6 mt-n2 font-weight-500">Want to become an
                                    <p className="mb-0 fs-18">Estate Agent?</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Register</a>
                                </div>
                                </div>
                                <div className="card property-widget mb-4">
                                <div className="card-body px-6 pt-5 pb-6">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-3">Featured Properties</h4>
                                    <div className="slick-slider mx-0" data-slick-options="{&quot;slidesToShow&quot;: 1, &quot;autoplay&quot;:true}">
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="box px-0">
                                        <div className="card border-0">
                                        <img src="images/feature-property-01.jpg" className="card-img" alt="Villa on Hollywood Boulevard" />
                                        <div className="card-img-overlay d-flex flex-column bg-gradient-3 rounded-lg">
                                            <div className="d-flex mb-auto">
                                            <a href="#" className="mr-1 badge badge-orange">featured</a>
                                            <a href="#" className="badge badge-indigo">for Rent</a>
                                            </div>
                                            <div className="px-2 pb-2">
                                            <a href="single-property-1.html" className="text-white"><h5 className="card-title fs-16 lh-2 mb-0">Villa on Hollywood
                                                Boulevard</h5>
                                            </a>
                                            <p className="card-text text-gray-light mb-0 font-weight-500">1421 San
                                                Predro
                                                St, Los Angeles</p>
                                            <p className="text-white mb-0"><span className="fs-17 font-weight-bold">$2500 </span>/month
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-body px-6 py-4">
                                    <h4 className="card-title fs-16 lh-2 text-dark mb-3">Latest Posts</h4>
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 pt-0 pb-3">
                                        <div className="media">
                                        <div className="position-relative mr-3">
                                            <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-02.jpg")'}}>
                                            </a>
                                            <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                            creative
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="fs-14 lh-186 mb-1">
                                            <a href="blog-details-1.html" className="text-dark hover-primary">
                                                Retail banks wake up to digital lending this year
                                            </a>
                                            </h4>
                                            <div className="text-gray-light">
                                            Dec 16, 2018
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 pt-2 pb-3">
                                        <div className="media">
                                        <div className="position-relative mr-3">
                                            <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-04.jpg")'}}>
                                            </a>
                                            <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                            rental
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="fs-14 lh-186 mb-1">
                                            <a href="blog-details-1.html" className="text-dark hover-primary">
                                                Within the construction industry as their overdraft
                                            </a>
                                            </h4>
                                            <div className="text-gray-light">
                                            Dec 16, 2018
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 pt-2">
                                        <div className="media">
                                        <div className="position-relative mr-3">
                                            <a href="blog-details-1.html" className="d-block w-100px rounded pt-11 bg-img-cover-center" style={{backgroundImage: 'url("images/post-07.jpg")'}}>
                                            </a>
                                            <a href="blog-grid-with-sidebar.html" className="badge text-white bg-dark-opacity-04 m-1 fs-13 font-weight-500 bg-hover-primary hover-white position-absolute pos-fixed-top">
                                            rental
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="fs-14 lh-186 mb-1">
                                            <a href="blog-details-1.html" className="text-dark hover-primary">
                                                Future Office Buildings: Intelligent by Design
                                            </a>
                                            </h4>
                                            <div className="text-gray-light">
                                            Dec 16, 2018
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8 mb-6 mb-lg-0  order-0 order-lg-1">
                            <div className="row align-items-sm-center mb-7">
                                <div className="col-sm-6 mb-6 mb-sm-0">
                                <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">45</span> agents available
                                    for
                                    you
                                </h2>
                                </div>
                                <div className="col-sm-6 ml-auto">
                                <div className="d-flex align-items-center justify-content-sm-end">
                                    <div className="input-group border rounded input-group-lg w-auto mr-6">
                                    <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sort
                                        by:</label>
                                    <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0" id="inputGroupSelect01" name="sortby">
                                        <option selected>Alphabet</option>
                                        <option value={1}>Random</option>
                                        <option value={1}>Rating</option>
                                        <option value={1}>Number of property</option>
                                    </select>
                                    </div>
                                    <div className="d-none d-md-block list-layout">
                                    <span className="fs-sm-18 text-muted active">
                                        <i className="fas fa-list" />
                                    </span>
                                    <a href="agents-grid-1.html" className="fs-sm-18 text-muted ml-5">
                                        <i className="fa fa-th-large" />
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-12.jpg" className="card-img" alt="Diego Garcia" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Diego Garcia
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-35.jpg" className="card-img" alt="Elmer Vega" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Elmer Vega
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-40.jpg" className="card-img" alt="Blanche Gordon" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Blanche Gordon
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-36.jpg" className="card-img" alt="Lenora Andrews" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Lenora Andrews
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-37.jpg" className="card-img" alt="Carl Jefferson" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Carl Jefferson
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-38.jpg" className="card-img" alt="Allen Wheeler" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Allen Wheeler
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card p-2 border-0 mb-4 d-block">
                                <div className="row no-gutters">
                                <div className="col-sm-4 pr-0 pr-sm-1">
                                    <a href="agent-details-1.html" className="d-block hover-shine">
                                    <img src="images/agent-39.jpg" className="card-img" alt="Eula Ryan" />
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body pl-0 pl-sm-7">
                                    <a href="agent-details-1.html" className="card-title d-block fs-16 lh-2 text-dark font-weight-500 hover-primary mb-0">
                                        Eula Ryan
                                    </a>
                                    <p className="mb-3 card-text">Copany Agent <a href="#" className="text-body"><u>Modern House Real Estate</u></a>
                                    </p>
                                    <a href="tel:123-900-68668" className="d-block">
                                        <span className="text-primary"><i className="fal fa-phone" /></span>
                                        <span className="d-inline-block ml-2 text-body">123 900 68668</span>
                                    </a>
                                    <a href="mailto:oliverbeddows@homeid.com" className="d-block">
                                        <span className="text-primary"><i className="fal fa-envelope" /></span>
                                        <span className="d-inline-block ml-2 text-body">oliverbeddows@homeid.com</span>
                                    </a>
                                    <div className>
                                        <span className="text-primary"><i className="fal fa-map-marker-alt" /></span>
                                        <span className="d-inline-block ml-2">398 Pete Pascale Pl, New York</span>
                                    </div>
                                    <ul className="list-inline text-gray-lighter mt-4 mb-0">
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li className="list-inline-item">
                                        <a href="#" className="w-32px h-32 rounded-lg bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <nav className="pt-6">
                                <ul className="pagination rounded-active justify-content-center">
                                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">...</li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
                                </ul>
                            </nav>
                            <div className="text-center mt-2">8-14 of 45 Results</div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </main>
    
                    <Footer />
    
            </div>
           
        )

    }    
}
