import React, { Component } from 'react';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from './images/covid19.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({data: fetchdata});
  }

  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);
    this.setState({data: fetchdata, country: country});
  }

  render() {
    const {data, country} = this.state;
    return (
      <div className="container-main">
        <img className='image' src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
