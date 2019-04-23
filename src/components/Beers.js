import React, { Component } from "react";

class Beers extends Component {
  state = {
    beerItem: this.props.location.state.item
  };
  formatYear = dateVale => {
    const dateString = dateVale.slice(0, 10).replace(/-/g, ".");

    return dateString;
  };
  render() {
    const beerInfo = { ...this.state.beerItem };
    console.log(beerInfo);
    return (
      <div className="card middle">
        <div className="top-section">
          {beerInfo.labels ? (
            <div>
              <img src={beerInfo.labels.contentAwareMedium} alt="img" className="" />
              <div className="menuicon">
                <span className="s1" />
                <span className="s2" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="info-section">
          <div className="">
            <label> Name: </label>
            <span className="">{beerInfo.name}</span>
          </div>
          <div>
            <h2>
              About
              <div className="border" />
            </h2>
            <div>
              <label>Alcohol%: </label>
              {beerInfo.abv ? (
                <span className="">{beerInfo.abv}%</span>
              ) : (
                <span className="">Non</span>
              )}
            </div>
            <div>
              <label>International Bitterness Units: </label>
              {beerInfo.ibu ? (
                <span className="">{beerInfo.ibu}</span>
              ) : (
                <span className="">Non</span>
              )}
            </div>
            <div>
              <label>Organic: </label>
              <span className="">{beerInfo.isOrganic}</span>
            </div>
            <div>
              <label>Status: </label>
              <span className="">{beerInfo.status}</span>
            </div>
            <div>
              <label>Year: </label>
              <span className="">{this.formatYear(beerInfo.createDate)}</span>
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Beers;
