import React from 'react';
import {ListDetailItem} from './ListDetailItem';

function ListItem({listIcon, detailType, ...otherProps}) {
  return (
    <div
      className={`flex text-gray-600 items-start ${
        detailType === 0 ? 'items-center' : ''
      }
      `}>
      <div className={`${detailType === 2 ? 'pt-1' : ''}`}>{listIcon}</div>
      <ListDetailItem detailType={detailType} {...otherProps} />
    </div>
  );
}

export default ListItem;
