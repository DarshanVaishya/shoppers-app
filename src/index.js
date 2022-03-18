import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import "./index.css";

const products = [
	{ id: 1, name: "Phone", price: 299 },
	{ id: 2, name: "Laptop", price: 999 },
	{ id: 3, name: "Headphones", price: 99 },
	{ id: 4, name: "Camera", price: 799 },
];

class App extends React.Component {
	state = {
		cart: [],
		activePage: "store",
	};

	handlePageChange = (page) => {
		this.setState({ activePage: page });
	};

	handleAdd = (item) => {
		this.setState((state) => ({ cart: [...state.cart, item] }));
	};

	render() {
		const { activePage, cart } = this.state;

		const getPage = {
			store: <ItemPage onAddToCart={this.handleAdd} items={products} />,
			cart: <CartPage onPageChange={this.handlePageChange} items={cart} />,
			checkout: <CheckoutPage items={cart} />,
		};

		return (
			<div className="App">
				<NavBar onPageChange={this.handlePageChange} cartCount={cart.length} />
				<main>{getPage[activePage]}</main>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
