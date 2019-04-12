import React from 'react'
import Business from './business'


const Main = (props) => {
    const mapped_businesses = (props.businesses ? props.businesses.map((a) =>
        <Business key={a.id+a.name} business = {a}/>
    ): null)
    return(
        <div>
            {mapped_businesses}
        </div>
    )
} 
    


export default Main