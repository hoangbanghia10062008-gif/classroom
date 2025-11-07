const songData = [ // Array to hold song data
	{
		video: "https://www.youtube.com/embed/zXEq-QO3xTg",
		PDF: "song pdf/Animals on the Farm.pptx.pdf",
		title: "Animals on the Farm",
	},

	{
		title: "Ants Go Marching One By One",
		video: "https://www.youtube.com/embed/Pjw2A3QU8Qg",
		PDF: "song pdf/Ants Go Marching One By One.pptx.pdf",
	},

	{
		title: "Autumn Leaves and London Bridge",
		video: "https://youtube.com/embed/ZvxJ2x1-FSs",
		PDF: "song pdf/Autumn Leaves and London Bridge.pptx.pdf",
	},

	{
		title: "Baby Beluga",
		video: "https://www.youtube.com/embed/mIBY-LQYkVA",
		PDF: "song pdf/Baby Beluga.pptx.pdf",
	},

	{
		title: "Dem Bones",
		video: "https://www.youtube.com/embed/YjJONLPzGfY",
		PDF: "song pdf/Dem Bones.pptx.pdf",
	},

	{
		title: "Drive the Fire Truck",
		video: "https://www.youtube.com/embed/XyUWz7kX_o0",
		PDF: "song pdf/Drive the Fire Truck.pptx.pdf",
	},

	{
		title: "I'm a Happy Dog!",
		video: "https://www.youtube.com/embed/snwJ2u5AawA",
		PDF: "song pdf/I'm a Happy Dog!.pdf",
	},

	{
		title: "I've Got Peace In My Fingers",
		video: "https://www.youtube.com/embed/bu6e3ZfZ2s0",
		PDF: "song pdf/I've Got Peace In My Fingers.pptx.pdf",
	},

	{
		title: "It's a New Year!",
		video: "https://www.youtube.com/embed/cyJlnbn4xGc",
		PDF: "song pdf/It's a New Year!.pdf",
	},

	{
		title: "Pumpkin, Pumpkin",
		video: "https://www.youtube.com/embed/trDl36m9pgA",
		PDF: "song pdf/Pumpkin, Pumpkin.pptx.pdf",
	},

	{
		title: "Row Row Row Your Boat",
		video: "https://www.youtube.com/embed/7otAJa3jui8",
		PDF: "song pdf/Row Row Row Your Boat.pptx.pdf",
	},

	{
		title: "You Are My Sunshine",
		video: "https://www.youtube.com/embed/dh7LJDHFaqA",
		PDF: "song pdf/You Are My Sunshine.pptx.pdf",
	},
	
];

function createSongEntry(song) {
	const content = `
		<div class="video">
			<iframe src="${song.video}"
				title="YouTube video player"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>
			<a href="/classroom/resources/songpdf/${song.PDF}" target="_blank">View PDF</a>
			<p>${song.title}</p>
		</div>
	`;
	return content;
};

function loadSongs() {
	const grid = document.querySelector(".grid");
	if (!grid) return;
	// Build all song HTML first
	const songHTML = songData.map(song => createSongEntry(song)).join("");
	
	// Insert all at once to minimize reflows
	grid.innerHTML = songHTML;
};
loadSongs()