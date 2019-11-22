import logo from "../sim.png";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Cleave from "cleave.js/react";

export default class Card extends Component {
	constructor() {
		super();

		this.state = {
			rip: "xxxx xxxx xxxx xxxx",
			name: "xxxxx",
			valid: "xx/xx"
		};
	}
	handleRip = e => {
		this.setState({
			rip: e.target.value
		});
	};
	handleName = e => {
		e.target.value.length > 20
			? alert("Name exceeds 20 characters")
			: this.setState({
					name: e.target.value.toUpperCase()
			  });
	};
	handleValid = e => {
		let x = e.target.value.toString();
		let y = x.slice(0, 2);
		y > 31
			? alert("Month contains only 31 days ;)")
			: this.setState({
					valid: e.target.value
			  });
	};
	render() {
		return (
			<div>
				<div className='card'>
					<p className='title'>CREDIT CARD</p>
					<img className='chip' src={logo} alt='logo' />
					<p className='rip'> {this.state.rip}</p>
					<div className='data'>
						<p className='nums'>5222</p>
						<div className='data2'>
							<p className='titleValid'>
								VALID
								<br /> THRU
							</p>
							<div className='valid'>
								<p className='MY'>MONTH/YEAR</p>
								<p className='date'>{this.state.valid}</p>
							</div>
						</div>
					</div>
					<p className='holder'>CARD HOLDER</p>
					<p className='holder'>{this.state.name}</p>
					<img
						className='logoMaster'
						src='http://pngimg.com/uploads/mastercard/mastercard_PNG9.png'
						alt='logomaster'
					/>
				</div>
				<div className='edit'>
					<Cleave
						options={{ creditCard: true }}
						onChange={this.handleRip}
						placeholder='Type your RIP'
						max-length='16'></Cleave>
					<input
						onChange={this.handleName}
						placeholder='Type your Name'
						max-length='20'></input>
					<Cleave
						options={{ blocks: [2, 2], delimiter: "/" }}
						onChange={this.handleValid}
						placeholder={this.state.valid}></Cleave>
				</div>
			</div>
		);
	}
}
