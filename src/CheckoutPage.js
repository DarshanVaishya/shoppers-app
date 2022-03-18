import React from "react";
import States from "./States";

class CheckoutPage extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		street: "",
		city: "",
		state: "",
		isResidential: false,
	};

	handleChange = (e) => {
		const name = e.target.name;
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { items } = this.props;
		const done =
			this.state.firstName &&
			this.state.lastName &&
			this.state.email &&
			this.state.street &&
			this.state.city &&
			this.state.state;

		return (
			<div className="CheckoutPage">
				<p>You are buying {items.length} items.</p>
				<form>
					<div className="field-group">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field-group">
						<label htmlFor="street">Street</label>
						<input
							type="text"
							id="street"
							name="street"
							value={this.state.street}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field-group">
						<label htmlFor="city">City</label>
						<input
							type="text"
							id="city"
							name="city"
							value={this.state.city}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field-group">
						<label htmlFor="state">State</label>
						<select
							name="state"
							id="state"
							value={this.state.state}
							onChange={this.handleChange}
						>
							<States />
						</select>
					</div>
					<div className="field-group">
						<label htmlFor="isResidential">
							Is this a residential address?
						</label>
						<input
							type="checkbox"
							name="isResidential"
							id="isResidential"
							checked={this.state.isResidential}
							onChange={this.handleChange}
						/>
					</div>
				</form>

				<section>
					<h3>Confirm Shipping Info</h3>
					{done ? (
						<>
							<div>
								{this.state.firstName} {this.state.lastName}
							</div>
							<div>{this.state.street}</div>
							<div>
								{this.state.city}, {this.state.state}
							</div>
							<br />
							{this.state.email}
							<br />
							<div>
								{this.state.isResidential ? "residential" : "commercial"}
							</div>
						</>
					) : (
						"Fill out the form first"
					)}
				</section>
			</div>
		);
	}
}

export default CheckoutPage;
