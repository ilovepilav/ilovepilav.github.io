import React from 'react';
import { TEXTS } from '../constants/Texts';

function Section({ isMain = false, children, title = TEXTS.name, id }) {
  return (
    <>
      <div className={`px-12 h-screen flex flex-col justify-center`} id={id}>
        <h1
          className={`${isMain ? 'text-5xl font-bold' : 'text-4xl font-bold '}
        text-slate-700
        font-saira
        uppercase
        `}
        >
          {title.split(' ').shift()}{' '}
          <span className="text-slate-600">
            {isMain && title.split(' ').pop()}
          </span>
        </h1>
        <div className={`${!isMain ? 'pt-12' : ''}`}>{children}</div>
      </div>
      <hr />
    </>
  );
}

export default Section;
