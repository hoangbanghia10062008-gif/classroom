// Array to hold book data
const phonicData = [
	{
		letter: "B",
		mouth: "https://www.youtube.com/embed/OwmLcXxzyLY",
		worksheet: "/classroom/resources/worksheet/Initial Consonant B-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/v62ivUdHQew",
		vocabSong: "https://www.youtube.com/embed/F7WyPqms5x0",
		summary: "",
	},

	{
		letter: "C",
		mouth: "https://www.youtube.com/embed/OwmLcXxzyLY",
		worksheet: "/classroom/resources/worksheet/Initial Consonant C-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/ZXBxUCdUJrA",
		vocabSong: "https://www.youtube.com/embed/LnDxp5QNxmA",
		summary: "",
	},

	{
		letter: "D",
		mouth: "https://www.youtube.com/embed/MjuM9TWhtDM",
		worksheet: "/classroom/resources/worksheet/Initial Consonant D-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/QZ30MbVvaQg",
		vocabSong: "https://www.youtube.com/embed/qdJwtaaTfb4&list=RDqdJwtaaTfb4",
		summary: "",
	},

	{
		letter: "F",
		mouth: "https://www.youtube.com/embed/37KyxTv01xs",
		worksheet: "/classroom/resources/worksheet/Initial Consonant F-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/i1f6H2OJzSg",
		vocabSong: "https://www.youtube.com/embed/CaywS_FK4wE",
		summary: "",
	},

	{
		letter: "G",
		mouth: "https://www.youtube.com/embed/5W9fBG9qnyg",
		worksheet: "/classroom/resources/worksheet/Initial Consonant G-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/BKBBmnQBs2Y",
		vocabSong: "https://www.youtube.com/embed/O96r1dZ4Nqg",
		summary: "",
	},

	{
		letter: "H",
		mouth: "https://www.youtube.com/embed/4FMkbuWvHXU",
		worksheet: "/classroom/resources/worksheet/Initial Consonant H-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/JVSCMVLH0aM",
		vocabSong: "https://www.youtube.com/embed/ndf_-FJsPVk",
		summary: "",
	},

	{
		letter: "I",
		mouth: "https://www.youtube.com/embed/IIBiGq2w6iA",
		worksheet: "/classroom/resources/worksheet/Initial Consonant I-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/d5xnlvH_ICo",
		vocabSong: "https://www.youtube.com/embed/yZbNMjwgEN8",
		summary: "",
	},

	{
		letter: "M",
		mouth: "https://www.youtube.com/embed/sH9YB2kVQDA",
		worksheet: "/classroom/resources/worksheet/Initial Consonant M-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/0O0xmga_mXw",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
		summary: "",
	},

	{
		letter: "S",
		mouth: "https://www.youtube.com/embed/3MbYisMrUs8",
		worksheet: "/classroom/resources/worksheet/Initial Consonant S-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/iV3diQgk7Gs",
		vocabSong: "https://www.youtube.com/embed/McACiO5dwGM",
		summary: "",
	},

	{
		letter: "T",
		mouth: "https://www.youtube.com/embed/wCBno6lmo3Y",
		worksheet: "/classroom/resources/worksheet/Initial Consonant T-JK.pdf",
		jollyPhonics: "https://www.youtube.com/embed/X1FmrEiUCaQ",
		vocabSong: "https://www.youtube.com/embed/4PhbUhrI4KE",
		summary: "",
	},
];

function createPhonicButton(phonic) { // Generates template for each phonic button
	return `<button type="button" class="btn-phonic"><i>${phonic.letter}${(phonic.letter).toLowerCase()}</i></button>`
};

function createPhonicContent(phonic) { // Generates template for each overlay content
	const content = `
		<button type="button" class="btn-exit">Exit</button>
		<div class="p-text">
			<h4>About Consonant <i>${phonic.letter}${(phonic.letter).toLowerCase()}</i></h4>
			<p>${phonic.summary}</p>
			<embed src="${phonic.worksheet}" target="_blank" class="pdf-preview">
		</div>
		
		<div class=video-container>
			<h4>Video Resources</h4>
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
		</div>
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

		overlay.style.visibility = "visible";
		overlay.style.maxHeight = "100%"; // Expands overlay to height of screen

		btnExit.addEventListener("click", function() {
			setTimeout(() => {
				overlay.style.visibility = "hidden";
			}, 200);
			overlay.style.maxHeight = null; // Close overlay
			for (const ele of content) { // Hide each children of content
				ele.style.visibility = "hidden";
			};
		});
	});
};