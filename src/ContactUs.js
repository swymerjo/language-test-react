import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	let courseResults = JSON.parse(localStorage.getItem('classOptions')).join(
		'& '
	);
	console.log(courseResults);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_y9kwcoa',
				'template_utaehz6',
				form.current,
				'user_O0EicnClTqFEK6Kl07ODl'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<h2>Congratulations!</h2>
			<h2>You are level C1</h2>
			<h5>To complete the test, please submit your name and email.</h5>
			<div>
				<label>Name: </label>
				<div className="form-section"></div>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<label>Email: </label>
			<div className="form-section">
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<label>Course Recommendations: </label>
			<div className="form-section">
				<input
					type="text"
					name="courseResults"
					id="courseResults"
					value={courseResults}
					onChange={console.log(courseResults)}
				/>
			</div>

			<button className="submit-btn" type="submit" value="Submit">
				Submit
			</button>
		</form>
	);
}
