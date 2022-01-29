import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [formClass, setFormClass] = useState('');
	const [textClass, setTextClass] = useState('hide-text');
	let courseResults = JSON.parse(localStorage.getItem('classOptions')).join(
		'& '
	);
	console.log(courseResults);
	console.log(textClass);

	const sendEmail = (e) => {
		e.preventDefault();

		setTextClass('show-text');
		setName('Thanks!');
		setEmail('Thanks!');
		setFormClass('hide-text');

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
		<form ref={form} onSubmit={sendEmail} className="form-format">
			<div className={formClass}>
				<h3 className="complete-test-text">
					To complete the test, please submit your name and email.
				</h3>
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
				<label className="hide-text">Course Recommendations: </label>
				<div className="form-section">
					<input
						className="course-box"
						type="text"
						name="courseResults"
						id="courseResults"
						value={courseResults}
						onChange={console.log(courseResults)}
					/>
				</div>

				<button
					className="submit-btn"
					type="submit"
					value="Submit"
					onChange={console.log(courseResults)}
				>
					Submit
				</button>
			</div>
			<h2 className={textClass}>
				Thanks! You have successfully submitted you results. Please follow the
				link above to see your course recommendations.
			</h2>
			<a
				href="http://www.carl-schurz-haus.de/home.html"
				rel="noreferrer"
				className="csh-link"
			>
				Visit the Carl-Schurz-Haus website
			</a>
		</form>
	);
}
