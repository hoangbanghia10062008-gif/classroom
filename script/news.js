import { CreateHeader } from './header-template.js'

CreateHeader('News', 'Stay updated with the latest news and announcements from our classroom. Here, you will find information about upcoming events, recent activities, and important updates that keep you informed about everything happening in our learning community.');

function updateDate() { // Function to update the date
	const dateElement = document.getElementById("currentDate");
	const today = new Date();
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	dateElement.textContent = today.toLocaleDateString(undefined, options);
}
updateDate();