import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory =({sections}) => ( 
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
      </div>
    );

const mapstateToProps = createStructuredSelector({
  sections : selectDirectorySection,
});

export default connect(mapstateToProps)(Directory);
