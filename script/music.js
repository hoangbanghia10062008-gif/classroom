import { CreateHeader, CreateSong } from './header-template.js';

CreateHeader("Music Resources", "Songs and Worksheets for Learning");

const songData = [ // Array to hold song data
	{
		video: "https://www.youtube.com/embed/zXEq-QO3xTg",
		title: "Animals on the Farm",
		PDF: "Animals on the Farm.pptx.pdf",
	},

	{
		title: "Ants Go Marching One By One",
		video: "https://www.youtube.com/embed/Pjw2A3QU8Qg",
		PDF: "Ants Go Marching One By One.pptx.pdf",
	},

	{
		title: "Autumn Leaves and London Bridge",
		video: "https://youtube.com/embed/ZvxJ2x1-FSs",
		PDF: "Autumn Leaves and London Bridge.pptx.pdf",
	},

	{
		title: "Baby Beluga",
		video: "https://youtube.com/embed/ZjTnENSYAcM",
		PDF: "Baby Beluga.pptx.pdf",
	},

	{
		title: "Dem Bones",
		video: "https://www.youtube.com/embed/YjJONLPzGfY",
		PDF: "Dem Bones.pptx.pdf",
	},

	{
		title: "Drive the Fire Truck",
		video: "https://www.youtube.com/embed/XyUWz7kX_o0",
		PDF: "Drive the Fire Truck.pptx.pdf",
	},

	{
		title: "I'm a Happy Dog!",
		video: "https://www.youtube.com/embed/snwJ2u5AawA",
		PDF: "I'm a Happy Dog!.pdf",
	},

	{
		title: "I've Got Peace In My Fingers",
		video: "https://www.youtube.com/embed/bu6e3ZfZ2s0",
		PDF: "I've Got Peace In My Fingers.pptx.pdf",
	},

	{
		title: "It's a New Year!",
		video: "https://www.youtube.com/embed/cyJlnbn4xGc",
		PDF: "It's a New Year!.pdf",
	},

	{
		title: "Pumpkin, Pumpkin",
		video: "https://www.youtube.com/embed/trDl36m9pgA",
		PDF: "Pumpkin, Pumpkin.pptx.pdf",
	},

	{
		title: "Row Row Row Your Boat",
		video: "https://www.youtube.com/embed/7otAJa3jui8",
		PDF: "Row Row Row Your Boat.pptx.pdf",
	},

	{
		title: "You Are My Sunshine",
		video: "https://www.youtube.com/embed/dh7LJDHFaqA",
		PDF: "You Are My Sunshine.pptx.pdf",
	},
	
];

function populateSongEntry() {
	for (let i = 0; i < songData.length; ++i) {
		CreateSong(songData[i].video, songData[i].PDF, songData[i].title);
	};
};
populateSongEntry();