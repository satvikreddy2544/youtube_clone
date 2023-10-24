import React, { useEffect } from "react";
import { HAMBURGER_LOGO, LOGO } from "./ImageLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utilties/sideBarSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cacheResults } from "../utilties/cacheSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cacheData = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const manageToggleSidebar = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchText]) {
        setSuggestions(cacheData[searchText]);
      } else {
        getSuggestions(searchText);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSuggestions = async (searchText) => {
    console.log("api call -", searchText);
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchText
    );
    const suggestionData = await data.json();

    dispatch(
      cacheResults({
        [searchText]: suggestionData[1],
      })
    );

    setSuggestions(suggestionData[1]);
  };

  return (
    <div className="w-screen  bg-white h-20 flex text-black items-center mx-4  space-x-48 shadow-lg">
      <div className="flex space-x-3 cursor-pointer">
        <img
          src={HAMBURGER_LOGO}
          onClick={() => manageToggleSidebar()}
          className="h-12 cursor-pointer"
        />

        <img src={LOGO} className="h-12" />
      </div>
      <div className="w-[50%] ">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
              setSuggestions([]);
            }}
            className="p-2 w-[38rem] border border-black rounded-l-full "
          />

          <button className=" text-black font-semibold w-17 p-2 border border-black rounded-r-full">
            search
          </button>
        </div>
        {suggestions.length == 0 ? null : (
          <div className="fixed bg-white w-[38rem] p-4 rounded-lg">
            <ul>
              {showSuggestions &&
                suggestions.map((sugg) => (
                  <li className="hover:bg-gray-200 mt-2 ml-3" key={sugg}>
                    {sugg}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold rounded-2xl border border-solid border-gray-500 p-1 bg-red-400">
          Sai
        </h1>
      </div>
    </div>
  );
};

export default Header;
