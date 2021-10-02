import React from "react";
import {SearchCard} from "../Components"
import axios from "axios";

class AllHospitals extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
      search: "",
      hospitals: [],
     };
    }
   
    componentDidMount() {
     axios.get(`${process.env.REACT_APP_API_URL}/hospital/view`).then((res) => {
      const hospitals = res.data;
      this.setState({ hospitals });
      console.log(hospitals);
     });
    }
    render() {
     return (
      <>
       <h1>All hospital</h1>
       <SearchCard hospitals={this.state.hospitals}/>
      </>
     );
    }
   }

export default AllHospitals