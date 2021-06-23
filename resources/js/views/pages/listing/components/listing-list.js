import React from 'react'
import ListingGridCard from './cards/listing-grid-card'


export default function ListingList(props) {  
    const cards = props.details;
    const gridItems = <p>Hsj askja sjak akjsa kjs ajks</p>
    
    return (
        <div className="row">
            <div className="col-md-6 mb-6">
                {gridItems}
            </div>
        </div>
    )
}