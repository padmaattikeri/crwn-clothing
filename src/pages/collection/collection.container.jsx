import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: (state) => !selectIsCollectionLoaded(state)
});

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
// we can weite the above statement in simmplified form using compose as follows

//composer evaluates from right to left
const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionContainer;
