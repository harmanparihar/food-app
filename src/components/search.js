import React from 'react'

const Search = (props) => (
    <div>
        <form onSubmit={props.formsubmit}> 
            <input name="search-field" defaultValue={props.search_prase} type="text" placeholder="Keyword or Search Phrase" /> 
            <input name="category" defaultValue={props.category} type="text" placeholder="Search Category" /> 
            <input name="city" defaultValue={props.city} type="text" placeholder="Search City" /> 
            <button className="search">Search</button>
        </form>
    </div>
)
export default Search