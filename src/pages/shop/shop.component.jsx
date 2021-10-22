import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionsStart, match}) => {
  useEffect(()=>{
    fetchCollectionsStart()
  },[fetchCollectionsStart]);   
  
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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
