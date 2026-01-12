import { CreateHeader } from './header-template.js';

CreateHeader("Action Words", "Explore common action words with fun videos and images.");

const actionData = [ // Array to hold song data
	{
		word: "build",
		video: "",
		image: "action-build.png",
		definition: "",
	},

	{
		word: "crawl",
		video: "",
		image: "action-crawl.png",
		definition: "Move on the floor with your hands and legs",
	},

	{
		word: "drink",
		video: "https://www.youtube.com/embed/Ze4JZmKU8Hg",
		image: "action-drink.png",
		definition: "",
	},

	{
		word: "fly",
		video: "https://www.youtube.com/embed/y9-6_Z8LvCY",
		image: "action-fly.png",
		definition: "",
	},

	{
		word: "help",
		video: "https://www.youtube.com/embed/JC1Xg2kPUMY",
		image: "action-help.png",
		definition: "",
	},

	{
		word: "jump",
		video: "https://www.youtube.com/embed/LPYLHlcFnMg",
		image: "action-jump.png",
		definition: "",
	},

	{
		word: "kick",
		video: "",
		image: "action-kick.png",
		definition: "Using your legs to move an object",
	},

	{
		word: "look",
		video: "https://www.youtube.com/embed/40QDMv90by4",
		image: "action-look.png",
		definition: "Using your eyes to watch something",
	},

	{
		word: "nap",
		video: "",
		image: "action-nap.png",
		definition: "To rest for a short time",
	},

	{
		word: "read",
		video: "",
		image: "action-read.png",
		definition: "Using your eyes to look at and understand a word",
	},

	{
		word: "run",
		video: "https://www.youtube.com/embed/9od-u3dRovw",
		image: "action-run.png",
		definition: "",
	},

	{
		word: "shout",
		video: "",
		image: "action-shout.png",
		definition: "",
	},

	{
		word: "stretch",
		video: "",
		image: "action-stretch.png",
		definition: "",
	},

	{
		word: "walk",
		video: "https://www.youtube.com/embed/_7fbJ_VbFu0",
		image: "action-walk.png",
		definition: "",
	},

];

function createActionEntry(action) {
	const content = `
		<div class="hover-container">
			<img src="/classroom/resources/action-images/${action.image}"
				 alt="Image for ${action.word}"
				 class="action-image">
			<div class="hidden-content">
				<iframe data-src="${action.video}" 
						src="about:blank"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
				</iframe>
				<p>${action.definition}</p>
			</div>
		</div>
	`;
	return content;
};

function loadActions() {
	const grid = document.querySelector(".grid");
	if (!grid) return;
	// Build all song HTML first
	const actionHTML = actionData.map(action => createActionEntry(action)).join("");

	// Insert all at once to minimize reflows
	grid.innerHTML = actionHTML;
};


// Lazy-loading videos

function initializeVideoLazyLoad() {
	const actionContainers = document.querySelectorAll(".hover-container");

	actionContainers.forEach(container => {
		// We'll use 'mouseenter' (hover) to load the video
		container.addEventListener('mouseenter', () => {
			const iframe = container.querySelector('iframe');

			// Check if the 'data-src' exists and if the 'src' is still empty
			if (iframe && iframe.getAttribute('data-src') && iframe.src.includes('about:blank')) {
				const videoUrl = iframe.getAttribute('data-src');
				iframe.src = videoUrl; // This is what loads the video!
			}
		}, { once: true }); // 'once: true' ensures this only runs one time per book
	});
}

// After the books are loaded into the page, set up the lazy-load listeners
loadActions();
initializeVideoLazyLoad(); // <-- This line was changed (from just 'loadBooks();')