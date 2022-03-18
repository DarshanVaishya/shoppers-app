import React from "react";

function Item({ item, children }) {
	return (
		<li className="Item">
			{item.name}
			<span className="price">${item.price}</span>
			{children}
		</li>
	);
}

export default Item;
