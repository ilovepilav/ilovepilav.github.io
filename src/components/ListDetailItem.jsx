import React from 'react';

const detailType = Object.freeze({
  plainText: 0,
  linked: 1,
  detailed: 2,
});

function ListDetailItem({detailType, title, url, text}) {
  switch (detailType) {
    case 0:
      return <p className='ml-2'>{text}</p>;

    case 1:
      return (
        <span className='flex-1'>
          <a href={url} className='text-sky-700 underline '>
            {title}
          </a>{' '}
          - {text}
        </span>
      );

    case 2:
      return (
        <span className='flex-1 ml-2'>
          {title}
          {' - '}
          {text}
        </span>
      );
  }
}

export {ListDetailItem, detailType};
