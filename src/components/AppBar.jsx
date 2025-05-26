import React, { useState } from 'react';
import { useRouter } from 'next/router';

function AppBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchquery, setSearchQuery] = useState('');
  const router = useRouter();

  // const handleSearchToggle = () => {
  //   if (!showSearch) {
  //     setShowSearch(true);
  //   } else {
  //     handleSearch();
  //   }
  // };

  const handleSearch = () => {
    if (searchquery.trim() !== '') {
      const finding = searchquery.split(' ').join('').toLowerCase();

      // Perform router navigation to search page with query
      router.push(`/search?query=${encodeURIComponent(searchquery)}`);
      // console.log(`Searching for: ${searchquery}`);

      setShowSearch(false); // Hide search input after search
    }
  };

  return (
    <div className="grid grid-cols-10 p-4 gap-2 bg-black text-white shadow-md items-center rounded-full">
      {/* YouTube Logo */}
      <div className="col-span-2">
        <a href="/" rel="noreferrer">
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/fb257ed7a3a65b5b1ea72a20ce9e5f44cb20160705a21931361feb128bfd3689_244x112.webp"
            alt="YouTube Logo"
            className="w-24 h-10"
          />
        </a>
      </div>

      {/* Search Input + Button */}
      <div className="col-span-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          // style={{ display: showSearch ? 'block' : 'none' }}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchquery}
          className=" bg-gray-900 p-2 text-md w-full m-1 rounded-3xl transition-all duration-200 ease-in-out sm:block md:block lg:block"
        />
        <button
          className="bg-blue-500 text-sm text-white p-2 rounded-3xl lg:text-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Notification Icon */}
      <div className="col-span-1 justify-center flex">
       <button onClick={()=>alert('not yet implemented')}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4992/4992062.png"
            alt="Notifications"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8"
          />
       </button>
      </div>

      {/* User Icon */}
      <div className="col-span-1 justify-end flex items-center">
        <a href="/login">
          <img
            src="https://cdn-icons-png.flaticon.com/128/18827/18827829.png"
            alt="User Profile"
            className="w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10"
          />
        </a>
      </div>
    </div>
  );
}

export default AppBar;
