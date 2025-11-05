const songData = [ // Array to hold song data
	{
		URL: "https://www.youtube.com/embed/zXEq-QO3xTg",
		PDF: "song pdf/Animals on the Farm.pptx.pdf",
		title: "Animals on the Farm",
	},

	{
		title: "Ants Go Marching One By One",
		URL: "https://www.youtube.com/embed/Pjw2A3QU8Qg",
		PDF: "song pdf/Ants Go Marching One By One.pptx.pdf",
	},

	{
		title: "Autumn Leaves and London Bridge",
		URL: "https://youtube.com/embed/ZvxJ2x1-FSs",
		PDF: "song pdf/Autumn Leaves and London Bridge.pptx.pdf",
	},

	{
		title: "Baby Beluga",
		URL: "https://www.youtube.com/embed/mIBY-LQYkVA",
		PDF: "song pdf/Baby Beluga.pptx.pdf",
	},

	{
		title: "Dem Bones",
		URL: "https://www.youtube.com/embed/YjJONLPzGfY",
		PDF: "song pdf/Dem Bones.pptx.pdf",
	},

	{
		title: "Drive the Fire Truck",
		URL: "https://www.youtube.com/embed/XyUWz7kX_o0",
		PDF: "song pdf/Drive the Fire Truck.pptx.pdf",
	},

	{
		title: "I'm a Happy Dog!",
		URL: "https://www.youtube.com/embed/snwJ2u5AawA",
		PDF: "song pdf/I'm a Happy Dog!.pdf",
	},

	{
		title: "I've Got Peace In My Fingers",
		URL: "https://www.youtube.com/embed/bu6e3ZfZ2s0",
		PDF: "song pdf/I've Got Peace In My Fingers.pptx.pdf",
	},

	{
		title: "It's a New Year!",
		URL: "https://www.youtube.com/embed/cyJlnbn4xGc",
		PDF: "song pdf/It's a New Year!.pdf",
	},

	{
		title: "Pumpkin, Pumpkin",
		URL: "https://www.youtube.com/embed/trDl36m9pgA",
		PDF: "song pdf/Pumpkin, Pumpkin.pptx.pdf",
	},

	{
		title: "Row Row Row Your Boat",
		URL: "https://www.youtube.com/embed/7otAJa3jui8",
		PDF: "song pdf/Row Row Row Your Boat.pptx.pdf",
	},

	{
		title: "You Are My Sunshine",
		URL: "https://www.youtube.com/embed/dh7LJDHFaqA",
		PDF: "song pdf/You Are My Sunshine.pptx.pdf",
	},
	
];

function createSong(song) {
	const content = `
		<div class="video">
			<iframe src="${song.URL}"
				title="YouTube video player"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>
			<a href="${song.PDF}" target="_blank">View PDF</a>
			<p>${song.title}</p>
		</div>
	`;
	return content;
};

function loadSongs() {
	const grid = document.querySelector('.song-grid');
	if (!grid) return;

	// Build all song HTML first
	const songsHTML = songData.map(song => createSong(song)).join('');
	
	// Insert all at once to minimize reflows
	grid.innerHTML = songsHTML;
};