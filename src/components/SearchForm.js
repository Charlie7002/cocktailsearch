import React from "react";

import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearch } = useGlobalContext();
	const searchValue = useRef("");

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	const handleSearch = () => {
		setSearch(searchValue.current.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="section-search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Search your favorite cocktail</label>
					<p>Search by cocktail name or by ingredient</p>
					<input type="text" onChange={handleSearch} ref={searchValue} id="name" />
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
