import React from "react";
import Item from "./Item";

function summarizer(result, item) {
	const existing = result.find((i) => i.id === item.id);
	if (!existing) {
		result.push({ ...item, count: 1 });
	} else {
		existing.count++;
	}

	return result;
}

function CartPage({ items, onPageChange }) {
	const cart = items.reduce(summarizer, []);
	console.log(cart);

	return (
		<div className="CartPage">
			<ul>
				{cart.map((item) => (
					<Item key={item.id} item={item}>
						{item.count}
					</Item>
				))}
			</ul>
			<div className="total">
				Total: $
				{cart.reduce((total, item) => total + item.price * item.count, 0)}
			</div>
			<button onClick={() => onPageChange("checkout")}>Checkout now</button>
		</div>
	);
}

export default CartPage;
