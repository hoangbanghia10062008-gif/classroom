const sightData = [ // Array to hold song data
	{
		word: "build",
		video: "",
		image: "action-build.png",
	},

	{
		word: "crawl",
		video: "",
		image: "action-crawl.png",
	},

	{
		word: "drink",
		video: "https://www.youtube.com/embed/Ze4JZmKU8Hg",
		image: "action-drink.png",
	},

	{
		word: "fly",
		video: "https://www.youtube.com/embed/y9-6_Z8LvCY",
		image: "action-fly.png",
	},

	{
		word: "help",
		video: "https://www.youtube.com/embed/JC1Xg2kPUMY",
		image: "action-help.png",
	},

	{
		word: "jump",
		video: "https://www.youtube.com/embed/LPYLHlcFnMg",
		image: "action-jump.png",
	},

	{
		word: "kick",
		video: "",
		image: "action-kick.png",
	},

	{
		word: "look",
		video: "https://www.youtube.com/embed/40QDMv90by4",
		image: "action-look.png",
	},

	{
		word: "nap",
		video: "",
		image: "action-nap.png",
	},

	{
		word: "read",
		video: "",
		image: "action-read.png",
	},

	{
		word: "run",
		video: "https://www.youtube.com/embed/9od-u3dRovw",
		image: "action-run.png",
	},

	{
		word: "shout",
		video: "",
		image: "action-shout.png",
	},

	{
		word: "stretch",
		video: "",
		image: "action-stretch.png",
	},

	{
		word: "walk",
		video: "https://www.youtube.com/embed/_7fbJ_VbFu0",
		image: "action-walk.png",
	},

];

function createSightEntry(sight) {
	const content = `
		<div class="hover-container">
			<img src="/classroom/resources/sight-images/${sight.image}"
				 alt="Image for ${sight.word}"
				 class="action-image">
			<div class="hidden-content">
				<iframe data-src="${sight.video}" 
						src="about:blank"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen>
				</iframe>
			</div>
		</div>
	`;
	return content;
};

function loadSights() {
	const grid = document.querySelector(".grid");
	if (!grid) return;
	// Build all song HTML first
	const sightHTML = sightData.map(sight => createSightEntry(sight)).join("");

	// Insert all at once to minimize reflows
	grid.innerHTML = sightHTML;
};


// Lazy-loading videos

function initializeVideoLazyLoad() {
	const sightContainers = document.querySelectorAll(".hover-container");

	sightContainers.forEach(container => {
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
loadSights();
initializeVideoLazyLoad(); // <-- This line was changed (from just 'loadBooks();')