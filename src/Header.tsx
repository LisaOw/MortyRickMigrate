import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col">
      <a href="#" className="pl-3 justify-between flex p-3">
        <button className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
        </button>
        <ul className="text-base flex font-bold">
          <li className="hover:text-orange-600 p-3">Docs</li>
          <li className="hover:text-orange-600 p-3">About</li>
          <li className="hover:text-orange-50 rounded-lg hover:bg-orange-600 border-[1px] py-2 px-7 border-orange-600">Support us</li>
        </ul>
      </a>
      <div className="">
        <div className="flex p-10 md:p-16 2xl:p-40 text-center items-center justify-center">
          <p className="font-bold font-sans text-6xl md:text-5xl lg:text-7xl xl:text-8xl">
            The Rick and Morty API
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
