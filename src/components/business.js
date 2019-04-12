import React from 'react';
const Business = (props) => (
        <a href={props.business.url}>
            <article>
                <img className="" src={props.business.image_url} alt=""/>
                <div>
                    <h1><b>Name:</b> {props.business.name}</h1>
                    <h2>{(props.business.is_closed? "Closed" : "Open")}</h2>
                    <div><b>Price:</b> {props.business.price}</div>
                    <div>
                        <b>No. of Reviews :</b>{props.business.review_count}
                    </div>
                    <div>
                        <b>Rating:</b> {props.business.rating}
                    </div>
                    <div>
                        <b>Address:</b> {props.business.location.address1} 
                        {props.business.location.address2} 
                        {props.business.location.address3} <br />
                        {props.business.location.city}, <br />
                        {props.business.location.country} <br />
                    </div>
                    <div>
                        <b>Phone: </b>{props.business.phone}
                    </div>
                    <div>
                     <b>Yelp link:</b> {props.business.url}
                    </div>
                </div>
            </article>
            <hr/>
        </a>
)

export default Business;