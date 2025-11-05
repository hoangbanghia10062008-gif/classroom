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
		URL: "https://www.youtube.com/embed/aD3LZe7IoOo",
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
		URL: "https://www.youtube.com/embed/1Mph3hygIFU",
		PDF: "song pdf/Pumpkin, Pumpkin.pptx.pdf",
	},

	{
		title: "Row Row Row Your Boat",
		URL: "https://www.youtube.com/embed/7otAJa3jui8",
		PDF: "song pdf/Row Row Row Your Boat.pptx.pdf",
	},

	{
		title: "You Are My Sunshine",
		URL: "https://www.youtube.com/embed/4Oc6PTtcthA",
		PDF: "song pdf/You Are My Sunshine.pptx.pdf",
	},
	
];
		
// global grid reference (set in loadBooks)
let grid = null;

function createBook(song) {
	const content = `
		<div class="video">
			<iframe src="${song.URL}" title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<a href="${song.PDF}" target="_blank">View PDF</a>
			<p>${song.title}</p>
		</div>
	`;
	return content;
}

function loadSongs() {
	const grid = document.querySelector('.grid');
	if (!grid) return;

	// Build all book HTML first
	const songsHTML = songData.map(song => createBook(song)).join('');
	
	// Insert all at once to minimize reflows
	grid.innerHTML = songsHTML;
}