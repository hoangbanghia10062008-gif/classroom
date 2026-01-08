// HEADER
const header = document.createElement('div');
const title = document.createElement('h1');
const subtitle = document.createElement('h4');

header.classList.add('header')

title.style.fontSize = "60px";

subtitle.style.fontSize = "40px";

header.prepend(title, subtitle);

export function CreateHeader(titleText, subtitleText) {
	title.textContent = titleText;
	subtitle.textContent = subtitleText;
	document.body.prepend(header);
};

// SONG
export function CreateSong(URL, PDF, TEXT) {
	const songContainer = document.createElement('div');
	songContainer.classList.add('container');
	const songURL = document.createElement('iframe');

	songURL.title = "YouTube video player";
	songURL.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
	songURL.referrerPolicy = "strict-origin-when-cross-origin";
	songURL.allowFullscreen = true;

	const songPDF = document.createElement('a');
	const songText = document.createElement('p');

	songContainer.prepend(songURL, songPDF, songText);

	songURL.src = URL;
	songPDF.href = '/classroom/resources/songpdf/' + PDF;
	songPDF.textContent = TEXT + ' worksheet.pdf';
	songText.textContent = TEXT;

	const Grid = document.querySelector('.grid');
	Grid.appendChild(songContainer);
};