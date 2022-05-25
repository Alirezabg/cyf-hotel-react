import React, { useState } from "react";
import SearchButton from "./searchButton";

const Search = props => {
  // const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    props.setSearchInput(event.target.value);
  }
  const onSubmitHandler = e => {
    e.preventDefault();
    props.search(props.searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={props.searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />{" "}
              <SearchButton
                searchInput={props.searchInput}
                onSubmitHandler={onSubmitHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
