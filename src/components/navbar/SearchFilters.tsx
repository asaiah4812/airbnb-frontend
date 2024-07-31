import { Search } from 'lucide-react';
import React from 'react'

const SearchFilters = () => {
  return (
    <div className="flex items-center border rounded-full w-full shadow-xl ">
      <div className="flex item-center flex-col justify-between p-4 rounded-full hover:bg-slate-100 hover:shadow">
        <span className="text-sm">Where</span>
        <input
          type="text"
          className="outline-0 bg-transparent"
          placeholder="Search destination"
        />
      </div>
      <div className="flex item-center flex-col justify-between p-4 rounded-full hover:bg-slate-100 hover:shadow">
        <span className="text-sm">Check in</span>
        <input
          type="text"
          className="outline-0 bg-transparent"
          placeholder="Add dates"
        />
      </div>
      <div className="flex item-center flex-col justify-between p-4 rounded-full hover:bg-slate-100 hover:shadow">
        <span className="text-sm">Check out</span>
        <input
          type="text"
          className="outline-0 bg-transparent"
          placeholder="Add dates"
        />
      </div>
      <div className="flex item-center flex-col justify-between p-4 rounded-full hover:bg-slate-100 hover:shadow">
        <span className="text-sm">Check out</span>
        <input
          type="text"
          className="outline-0 bg-transparent"
          placeholder="Add quests"
        />
      </div>
      <button title='Search' className="bg-red-500 rounded-full p-4 mr-2 text-white font-bold  hover:bg-red-400 transition duration-300 ease-in">
        <Search />
      </button>
    </div>
  );
}
export default SearchFilters;