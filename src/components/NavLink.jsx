import React from 'react';

function NavLink({ title }) {
  return (
    <a href={'#' + title} className="hover:text-gray-200 uppercase">
      {title}
    </a>
  );
}

export default NavLink;
