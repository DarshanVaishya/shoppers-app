import React from "react";
import Item from "./Item";

function ItemPage({ items, onAddToCart }) {
	return (
		<div className="ItemPage">
			<h2>Items for Sale</h2>
			{items.map((item) => (
				<Item key={item.id} item={item} onAddToCart={onAddToCart}>
					<button className="add" onClick={() => onAddToCart(item)}>
						Add to cart
					</button>
				</Item>
			))}
		</div>
	);
}

export default ItemPage;
