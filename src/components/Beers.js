import React, { Component } from "react";

class Beers extends Component {
  state = {
    beerItem: this.props.location.state.item
  };
  render() {
    const beerInfo = { ...this.state.beerItem };
    console.log(beerInfo);
    return (
      <div>
        <h1 className="">{beerInfo.name}</h1>
        <h1 className="">{beerInfo.abv}</h1>
        <h1 className="">{beerInfo.ibu}</h1>
        <h1 className="">{beerInfo.isOrganic}</h1>
        <h1 className="">{beerInfo.status}</h1>
        {beerInfo.labels ? <img src={beerInfo.labels.large} alt="img" className="" /> : ""}
      </div>
    );
  }
}
export default Beers;
