import react from 'react';

export default function Final() {
	return (
		<section>
			<h2>Congratulations! You are level C1</h2>

			<form>
				<div className="name-section">
					<input
						type="text"
						placeholder="Enter your name here"
						id="name"
					></input>
				</div>
				<input
					type="email"
					placeholder="Enter your email here"
					id="email"
				></input>
			</form>
			<button type="submit" className="submit-btn">
				Submit
			</button>
		</section>
	);
}
