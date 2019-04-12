import React from 'react'
import Search from './search'

const Header = (props) => (
    <div>
        <div className="title">
        <h1>React Food App</h1>
        <p>Search for food places around the world.</p>
        </div>
        <Search category={props.category} city={props.city} search_phrase={props.search_phrase} formsubmit={props.formsubmit}/>
    </div>
)
export default Header