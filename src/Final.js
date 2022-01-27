import React, { useState } from 'react';

export default function Final() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		let participantName = name;
		let participantEmail = email;
		console.log(participantName, participantEmail);
	}

	return (
		<section>
			<h2>Congratulations! You are level C1</h2>
			<h4> Please enter your details below </h4>
			<form onSubmit={handleSubmit}>
				<div className="name-section">
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						placeholder="Enter your name here"
						id="name"
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="email-section">
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						placeholder="Enter your email here"
						id="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="btn-wrap">
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
}
