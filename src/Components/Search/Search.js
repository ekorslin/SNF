import React, { Component } from "react";
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";
import "./Search.css";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }}

  log = (event) => {
    var city = this.refs.search.value;
    console.log(city.toUpperCase());
    axios({
      method:'get',
      url:"https://data.medicare.gov/resource/b27b-2uc7.json?location_city=" + city.toUpperCase(),
    })
      .then(function(response) {
        console.log(response);
        this.setState({
          data: response.data, 
          loading: false
        })}.bind(this))};


  render () {
    return (
  <div><br/>
    <div className="card img-fluid">
    <img className="card-img-top" src="CA.jpg" alt="beach" />
    <div className="card-img-overlay">
      <h3>Search by U.S. City:</h3><input type="text" ref="search" placeholder="City Search" />
      <button type="submit" id="button" onClick={this.log.bind(this)} value="Submit">Submit</button>
    </div>
  </div><br/>
    <table id="here_table">
<tbody>
  <tr>
      <th className="Facility">FACILITY NAME</th>
      <th>ADDRESS</th>
      <th>CITY</th>
      <th>STATE</th>
      <th>PHONE</th>
      <th>BEDS</th> 
      <th>NOTES</th> 

  </tr>
  {this.state.data.map((data, index) => (
          <tr>
            <td>{data.provider_name}</td>
            <td>{data.location_address}</td>
            <td>{data.location_city}</td>
            <td>{data.location_state}</td>
            <td>{data.provider_phone_number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</td>
            <td>{data.number_of_certified_beds}</td>
            <td><button type="button">View/Edit</button></td>
          </tr>
          ))}
  </tbody>
</table>
<CSVLink data={this.state.data}>
<img src="export.png" className="export" alt="export"/></CSVLink>
</div>
    )}};

export default Search;
