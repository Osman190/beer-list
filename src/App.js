import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import BeersList from "./components/BeersList";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    items: [],
    loading: true
  };
  deleteSpinner = () => {
    this.setState({ loading: !this.state.loading });
  };
  callApi = () => {
    const domain = process.env.REACT_APP_DOMAIN || "http://localhost";
    const port = process.env.REACT_APP_BACKENDPORT || 3005;
    axios
      .get(`${domain}:${port}/beers`)
      .then(items => {
        this.setState({ items: items.data.data, loading: !this.state.loading });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.callApi();
  }

  render() {
    return !this.state.loading ? (
      <div id="main">
        <table className="">
          <thead>
            <tr>
              <th id="name">Beer Name</th>
              <th id="abv">Beer abv</th>
              <th id="ibu">Beer ibu</th>
            </tr>
          </thead>
          <tbody>
            <BeersList items={this.state.items} />
          </tbody>
        </table>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default App;
