import React from "react";
import axios from "axios";
import { AllHospitals, SearchHospital } from "../Apis";
import { SearchCard } from "../Components";
class Search extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   search: "",
   hospitals: [],
   hospital: "",
  };
 }

 componentDidMount() {
  navigator.geolocation.getCurrentPosition(function (position) {
   console.log(position);
   axios
    .get(
     `${process.env.REACT_APP_API_URL}/hospital/search?lon=${position.coords.longitude}&lat=${position.coords.latitude}&radius=10000000000000000000000000000000000000000000000000000000000000000`
    )
    .then((res) => {
     const hospitals = res.data;
     console.log(hospitals);
     this.setState({
      hospital: hospitals,
     });
     console.log(this.state.hospital);
    });
  });
  console.log(this.state.hospitals);
 }
 render() {
  return (
   <>
    <h1>Your nearby hospital</h1>
    <SearchCard hospitals={this.state.hospitals || this.state.hospital} />
   </>
  );
 }
}

export default Search;
