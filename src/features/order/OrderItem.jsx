import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients);
  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
       <p className="text-sm italic capitalize text-stone-500">
        {isLoadingIngredients?"loading" : ingredients.join(', ') }
      </p> 
    </li>
  );
}

export default OrderItem;
