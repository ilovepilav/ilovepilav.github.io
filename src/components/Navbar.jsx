import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import ScrollspyNav from 'react-scrollspy-nav';

import { TEXTS } from '../constants/Texts';
import NavLink from './NavLink';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`md:items-center md:flex md:flex-col md:sticky md:w-1/4  md:h-screen md:flex-1 fixed top-0 w-full
        flex-1 bg-slate-800 h-60 transition-all ease-in-out duration-500 overflow-hidden px-2 
        ${toggle ? 'h-72' : 'h-16'}
    `}
    >
      <div className="pt-5 pb-2 flex top-0 justify-between ">
        <h1 className="text-white">{TEXTS.name}</h1>
        {toggle ? (
          <IoClose
            color="white"
            className="md:hidden"
            size={25}
            onClick={() => {
              setToggle(!toggle);
              console.log(toggle);
            }}
          />
        ) : (
          <HiMenu
            color="white"
            className="md:hidden"
            size={25}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        )}
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <ScrollspyNav
          scrollTargetIds={[
            'about',
            'education',
            'skills',
            'projects',
            'certificates',
          ]}
          activeNavClass="text-gray-200"
        >
          <div
            className={`mt-8 flex flex-col md:items-center font-semibold text-gray-400 gap-2 transition-opacity ease-in-out duration-500 `}
          >
            <img
              src="./profile.jpeg"
              alt="profile"
              className="w-44 rounded-full border-solid border-4 border-sky-500 mb-6 hidden md:inline"
            />
            <NavLink title={'about'} />
            <NavLink title={'education'} />
            <NavLink title={'skills'} />
            <NavLink title={'projects'} />
            <NavLink title={'certificates'} />
          </div>
        </ScrollspyNav>
      </div>
    </div>
  );
}

export default Navbar;
