const header = document.createElement('div');
const title = document.createElement('div');
const subtitle = document.createElement('div');

title.style.fontSize = "60px";
title.textContent = "Action Words";

subtitle.style.fontSize = "40px";
subtitle.textContent = "Action Words Description";

header.prepend(title, subtitle);

export function CreateHeader() {
	document.body.prepend(header);
};