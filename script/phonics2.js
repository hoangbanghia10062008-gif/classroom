// Array to hold book data
const phonicData = [
	{
		letter: "B",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/F7WyPqms5x0",
	},

	{
		letter: "C",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/LnDxp5QNxmA",
	},

	{
		letter: "D",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/qdJwtaaTfb4&list=RDqdJwtaaTfb4",
	},

	{
		letter: "F",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
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
		jollyPhonics: "",
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
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "S",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
	},

	{
		letter: "T",
		mouth: "",
		worksheet: "",
		jollyPhonics: "",
		vocabSong: "https://www.youtube.com/embed/4PhbUhrI4KE",
	},
];

function createPhonicButton(phonic) { // Generates template for each phonic button
	return `<button type="button" class="btn-phonic">${phonic.letter}</button>`
};

function createPhonicContent(phonic) { // Generates template for each overlay content
	const content = `
		<button type="button" class="btn-exit">Exit</button>
		<a href="${phonic.worksheet}" target="_blank">View Worksheet</a>
		<iframe src="${phonic.mouth}"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin" 
				allowfullscreen>
		</iframe>
		<iframe src="${phonic.jollyPhonics}"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin" 
				allowfullscreen>
		</iframe>
		<iframe src="${phonic.vocabSong}"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-write; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin" 
				allowfullscreen>	
		</iframe>
	`;
	return content
};

function loadButtons() { // Load Buttons for each Phonic
	const grid = document.querySelector(".grid");
	if (!grid) return;

	const phonicButtonHTML = phonicData.map(phonic => createPhonicButton(phonic)).join("");
	grid.innerHTML = phonicButtonHTML;
};
loadButtons();

let btnPhonic = document.getElementsByClassName("btn-phonic");

let overlay = document.querySelector(".overlay");

for (let i = 0; i < btnPhonic.length; i++) {
	btnPhonic[i].addEventListener("click", function () {

		overlay.innerHTML = createPhonicContent(phonicData[i]);
		
		let btnExit = document.querySelector(".btn-exit");
		let content = overlay.children;

		for (const ele of content) {
			ele.style.visibility = "visible"; // Expose each children of content
		};

		overlay.style.maxHeight = "100%"; // Expands overlay to height of screen

		btnExit.addEventListener("click", function() {
			overlay.style.maxHeight = null; // Close overlay
			for (const ele of content) { // Hide each children of content
				ele.style.visibility = "hidden";
			};
		});
	});
};