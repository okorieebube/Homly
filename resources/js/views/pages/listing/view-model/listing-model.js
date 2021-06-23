import ListingGrid from '../components/listing-grid';
import ListingList from '../components/listing-list';

export default class ListingModel {
    
    listing = <ListingGrid />;

    toogleListing(){
        if (this.state.grid) {
            this.setState(prevState => ({grid : false}))
            this.listing = <ListingGrid />
        } else {
            this.setState(prevState => ({grid : true}))
            this.listing = <ListingList />            
        }
        return this.listing;
    }

}