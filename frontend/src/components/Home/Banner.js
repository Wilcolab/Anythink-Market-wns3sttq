import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = ({ onSearch, search }) => {
  console.log("search", search);
  const onInput = (event) => {
    const newSearch = event.currentTarget.value;

    onSearch(
      newSearch,
      (page) => agent.Items.byTitle(newSearch, page),
      agent.Items.byTitle(newSearch)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            placeholder="What is it that you truly desire?"
            value={search}
            onInput={onInput}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;