import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/header'
import Main from './components/main'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      businesses: [{name: "", price: "", review_count: "",image_url:"", rating: "",url: "",phone:"",location:{}}],
      search_phrase: "",
      city: "",
      category: "",
    }
    this.searchBusiness = this.searchBusiness.bind(this);
    this.formsubmit = this.formsubmit.bind(this);
  }
  formsubmit= async (event) => {
    event.preventDefault()
    console.log(event.target.elements);
    this.setState({search_phrase: event.target.elements[0].value})
    this.setState({category: event.target.elements[1].value})
    this.setState({city: event.target.elements[2].value})
    this.searchBusiness(event.target.elements[0].value, event.target.elements[1].value, event.target.elements[2].value)
  }
  searchBusiness=(search_phrase, category, city) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${city || "vancouver"}&limit=10&locale=en_CA`,
    {
        headers: {
           Authorization: "Bearer mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx"
        }, params: {
            term : search_phrase,
            category: category
        }
     })
    .then(response => {
      if (!response.data.errmsg) {
        this.setState({businesses : response.data.businesses})
          console.log('get operation successful')
          console.log(response.data.businesses)
          
      } else {
          console.log('resgister operation failed')
      }
    }).catch(error => {
        console.log('register error: ')
        console.log(error)
    })
  }
  render() {
    return (
      <div className="wrapper">
        <Header category={this.state.category} city={this.state.city} search_phrase={this.state.search_phrase} formsubmit={this.formsubmit} getInfo={this.getInfo} searchBusiness={this.searchBusiness}/>
        {this.state.businesses[0].name && <Main businesses={this.state.businesses}/>}
      </div>
    );
  }
}

export default App;
