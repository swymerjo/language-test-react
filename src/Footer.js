import React from 'react';

export default function Footer() {
	return (
		<div className="footer-container">
			<span>
				<p className="footer-p">
					Property of the
					<a
						href="http://www.carl-schurz-haus.de/home.html"
						alt="csh website"
						className="footer-link-csh"
					>
						CSH
					</a>
					created by
					<a
						href="https://sammy-wymer.netlify.app"
						alt="sammy wymer"
						className="footer-link-sammy"
					>
						Sammy Wymer
					</a>
				</p>
			</span>
		</div>
	);
}
