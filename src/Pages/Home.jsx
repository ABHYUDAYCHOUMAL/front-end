import React from "react";
import Search from "../Components/Search";

class Home extends React.Component {
 render() {
  return (
   <>
    <h1>Home</h1>
    <Search/>
    <a href="/login">Login</a>
   </>
  );
 }
}

export default Home;
