import React, { Component } from 'react'

import Nav  from "../../shared/components/navbar/navbar";
import Footer from '../../shared/components/footer/footer';
import ListingModel from './view-model/listing-model';

export default class Listing extends Component {

    constructor(){
        super()
        this.state = { grid : true }
        ListingModel.toogleListing = ListingModel.toogleListing.bind(this)
    }

    render(){
        return(
            <div>
            <Nav />
                <button onClick={ListingModel.toogleListing}>Toogle</button>
                {this.listing}
                <Footer />
            </div>
        )
    }

}