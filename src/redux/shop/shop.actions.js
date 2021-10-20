import ShopActionTypes from "./shop.types";

import {
    firestore,
    convertCollectionsSnapshotToMap,
  } from '../../firebase/firebase.utils.js';

  
// export const updateCollections = (collectionsMap) =>({
//     type : ShopActionTypes.UPDATE_COLLECTION,
//     payload : collectionsMap,
// });

export const fetchCollectionsStart = (collectionsMap) =>({
    type : ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collectionsMap) =>({
    type : ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) =>({
    type : ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : errorMessage
})

export const fetchCollectionsStartAsync = ()=>{
    return dispatch => {
        const collectionRef = firestore.collection('collections');                
        
        dispatch(fetchCollectionsStart());
        collectionRef.get().then((snapshot) => {            
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        this.setState({isLoading:false});
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
    }
}