import React from "react";
const weapi = {
	key: "cc47df5c305928ff8c4fdb77b050034f",
	base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
	const dateBuilder = (d) => {
		let months = [
			"January",
			"February",
			"March",
			"Apirl",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Satuday",
		];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};
	return (
		<div className="app">
			<main>
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="search..." />
				</div>
				<div className="location-box">
					<div className="location">New York, USA</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
				<div className="weather-box">
					<div className="temp">26ºc</div>
					<div className="weather">SNOWING</div>
				</div>
			</main>
		</div>
	);
}

export default App;
