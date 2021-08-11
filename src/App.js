import React from 'react'
import axios from 'axios';
import { TextField, Button } from '@material-ui/core'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hospitals: [],
      type: "",
      openTime: "",
      closeTime: "",
      contact: "",
      facilities: "",
      location: [],
      email: "",
      name: "",
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8000/hospital/view')
      .then(res => {
        const hospitals = res.data;
        this.setState({ hospitals });
        console.log(hospitals);
      })

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");
    // const data = e.target.elements;
    let details = {
      name: this.state.name,
      email: this.state.email,
      type: this.state.type,
      openTime: this.state.openTime,
      closeTime: this.state.closeTime,
      contact: this.state.contact,
      facilities: this.state.facilities,
      location: [this.state.locationX, this.state.locationY]
    };
    axios.post("http://localhost:8000/hospital/store", { details });
  }

  render() {
    return (
      <div>
        {
          this.state.hospitals.map((e) => {
            return (
              <div className={e.name} key={e._id}>
                <p>{e.name} - {e.location}</p>
              </div>
            )
          })
        }
        <form noValidate onSubmit={this.handleSubmit} autoComplete="off">
          <TextField defaultValue={this.state.type} id="type" label="type" variant="outlined" />
          <TextField defaultValue={this.state.openTime} id="openTime" label="openTime" variant="outlined" />
          <TextField defaultValue={this.state.closeTime} id="closeTime" label="closeTime" variant="outlined" />
          <TextField defaultValue={this.state.contact} id="contact" type="number" label="contact" variant="outlined" />
          <TextField defaultValue={this.state.facilities} id="facilities" label="facilities*" variant="outlined" />
          <TextField defaultValue={this.state.locationX} id="location" type="number" label="locationX" variant="outlined" />
          <TextField defaultValue={this.state.locationY} id="location" type="number" label="locationY" variant="outlined" />
          <TextField defaultValue={this.state.email} id="email" label="email" variant="outlined" />
          <TextField defaultValue={this.state.name} id="name" label="name" variant="outlined" />
          <Button variant="contained" type="submit ">Default</Button>
        </form>

      </div>
    )
  }

}

export default App
