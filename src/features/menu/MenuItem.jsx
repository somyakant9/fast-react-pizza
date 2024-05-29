/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function MenuItem( {pizza} ) {
  // console.log(pizza);
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients?.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
