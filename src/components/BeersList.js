import React from "react";

const BeersList = props => {
  let beersList = props.items;
  console.log(beersList);
  return beersList.map((item, i) => {
    return (
      <tr className="container" key={i}>
        <th>{item.name}</th>
        <th>{item.abv}</th>
        <th>{item.ibu}</th>
      </tr>
    );
  });
};

export default BeersList;
