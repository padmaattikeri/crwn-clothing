import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import WithSpinner from '../../components/with-spinner/with-spinner.component';

//import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading:false
        }
    }
  
  componentDidMount() {
    //const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    
    
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });

    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
            // render={(props)=>
            //  <CollectionsOverviewWithSpinner isLoading={isCollectionFetching}  {...props} />}
            component= { CollectionsOverviewContainer } 
        />

        <Route
          path={`${match.path}/:collectionId`}
            //render={(props)=> 
            //<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
            component = { CollectionContainer } 
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
