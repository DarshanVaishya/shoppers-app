import React from "react";

function NavBar({ cartCount, onPageChange }) {
	return (
		<nav>
			<ul>
				<li>
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							onPageChange("store");
						}}
					>
						Store
					</a>
				</li>
				<li className="cart-count">
					<a
						href="/cart"
						onClick={(e) => {
							e.preventDefault();
							onPageChange("cart");
						}}
					>
						{" "}
						🛒{cartCount === 0 ? "Empty" : cartCount}
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
