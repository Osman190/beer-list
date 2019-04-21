import React from "react";
import { Link } from "react-router-dom";

const BeersList = props => {
  let beersList = props.items;
  console.log(beersList);
  return beersList.map((item, i) => {
    return (
      <tr className="container" key={i}>
        <th>
          {item.name}
          <div className="button_cont" align="center">
            <Link to={`/beers/${item.name}`}>
              <button className="example_d">details</button>
            </Link>
          </div>
        </th>
        <th>{item.abv}</th>
        <th>{item.ibu}</th>
      </tr>
    );
  });
};

export default BeersList;
