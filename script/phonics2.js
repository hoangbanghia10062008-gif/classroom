// Array to hold book data
const phonicData = [
	{
		letter: "B",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/8sQvep8_m_Y",
		vocabSong: "https://www.youtube.com/embed/F7WyPqms5x0",
	},

	{
		letter: "C",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/CAqOwKUEN3o",
		vocabSong: "https://www.youtube.com/embed/LnDxp5QNxmA",
	},

	{
		letter: "D",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/lyX1CgNfiLI",
		vocabSong: "https://www.youtube.com/embed/qdJwtaaTfb4&list=RDqdJwtaaTfb4",
	},

	{
		letter: "F",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/QqFTv9PZyk4",
		vocabSong: "https://www.youtube.com/embed/CaywS_FK4wE",
	},

	{
		letter: "G",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/BKBBmnQBs2Y",
		vocabSong: "https://www.youtube.com/embed/O96r1dZ4Nqg",
	},

	{
		letter: "H",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/9rHzSVQWGEI",
		vocabSong: "https://www.youtube.com/embed/ndf_-FJsPVk",
	},

	{
		letter: "I",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/d5xnlvH_ICo",
		vocabSong: "https://www.youtube.com/embed/yZbNMjwgEN8",
	},

	{
		letter: "M",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/4UxWFlGuaWo",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "S",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/ema1Gz3jpVI",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "T",
		mouth: "",
		worksheet: "",
		jollyPhonics: "https://www.youtube.com/embed/gB3AX5Ryujk",
		vocabSong: "https://www.youtube.com/embed/4PhbUhrI4KE",
	},
];

function createPhonicButton(phonic) {
	return `<button type="button" class="btn-phonic">${phonic.letter}</button>`
};

function createPhonicContent(phonic) {
	const content = `
		<a href="${phonic.worksheet}" target="_blank">View Worksheet</a>
		<img src=/classroom/resources/phonics-mouth"${phonic.mouth}" alt="Mouth Position for ${phonic.letter}">
		<iframe
			class="lazy-video"
			src="about:blank" 
			data-src="${phonic.jollyPhonics}"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen>
		</iframe>
		<iframe
			class="lazy-video"
			src="about:blank" 
			data-src="${phonic.vocabSong}"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-write; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin" 
			allowfullscreen>
		</iframe>
	`;
	return content
}

// Load Buttons
function loadButtons() {
	const grid = document.querySelector(".grid");
	if (!grid) return;

	const phonicButtonHTML = phonicData.map(phonic => createPhonicButton(phonic)).join("");
	grid.innerHTML = phonicButtonHTML;
};

// Run functions
loadButtons()

let btnPhonic = document.getElementsByClassName("btn-phonic")
let overlay = document.querySelector("overlay")

for (let i = 0; i < btnPhonic.length; i++) {
	btnPhonic[i].addEventListener("click", function () {
		let container = overlay.firstElementChild;
		container.innerHTML = createPhonicContent(phonicData[i]);
		overlay.classList.toggle("overlay-visible");
	});
}
