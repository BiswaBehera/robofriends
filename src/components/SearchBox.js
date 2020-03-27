import React from "react";

const SearchBox = ({ handleSearchChange, placeholder }) => {
	return (
		<div>
			<input
				className="pa3 ma2 ba b--green bg-lightest-blue"
				type="search"
				placeholder={placeholder}
				onChange={handleSearchChange}
			/>
		</div>
	);
};

export default SearchBox;
