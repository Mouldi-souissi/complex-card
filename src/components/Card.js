import logo from "../sim.png";
import React, { Component } from "react";

export default class Card extends Component {
	constructor() {
		super();

		this.state = {
			rip: "",
			name: "Mouldi",
			valid: "/"
		};
	}
	handleRip = e => {
		let x = e.target.value.toString();
		let part1 = x.slice(0, 4);
		let part2 = x.slice(4, 8);
		let part3 = x.slice(8, 12);
		let part4 = x.slice(12, 16);

		x.length > 16
			? alert("Maximum length 16")
			: this.setState({
					rip: part1
						.concat(" ")
						.concat(part2 + " ")
						.concat(part3 + " ")
						.concat(part4)
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
		let y = x.slice(2, x.length);
		let z = x.slice(0, 2);
		z > 31
			? alert("Month contains only 31 days ;)")
			: this.setState({
					valid: z.concat("/").concat(y)
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
					<input
						onChange={this.handleRip}
						placeholder='Type your RIP'
						max-length='16'></input>
					<input
						onChange={this.handleName}
						placeholder='Type your Name'
						max-length='20'></input>
					<input
						onChange={this.handleValid}
						placeholder='Valid thru'
						maxLength='4'></input>
				</div>
			</div>
		);
	}
}
