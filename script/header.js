// SEARCHBAR
initializeSearchBar = function () {
    let searchInput = document.querySelector(".search-input");
	let searchResults = document.querySelector(".search-results");

	if (!searchInput) {
        console.warn("Search bar (.search-input) not found. Skipping initialization.");
        return; // Exit the function
    };

    if (!searchResults) {
        console.warn("Search results (.search-results) not found.");
        // We might not need to 'return' here, but the 'Enter' key will fail.
	};

    searchInput.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			if (!searchInput.value) {
				searchResults.style.visibility = "hidden";
			} else {		
				searchResults.style.visibility = "visible";
			}
		};
    });
};

// Fetches and injects an HTML component
loadComponent = function (url, placeholderId) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				// Log a more helpful error to the console
				console.error(`Failed to load component: ${url}. Status: ${response.status}`);
				throw new Error(`Failed to load component: ${url}`);
			}
			return response.text();
		})
		.then(data => {
			const placeholder = document.getElementById(placeholderId);
			if (placeholder) {
				placeholder.innerHTML = data;
			} else {
				console.warn(`Placeholder not found: ${placeholderId}`);
			}
		})
		.catch(error => {
			console.error(error);
		});
};

// NAVBAR
let navColl = document.getElementsByClassName('nav-coll-container');
let navHead = document.getElementsByClassName('nav-head');
let navLinks = document.getElementsByClassName('nav-hidden-links')

findHeadNavButton = function() { // find and initialize collapsible nav
	for (let i = 0; i < navColl.length; i++) {
		navHead[i].addEventListener('click', function () {
			let curNavLinks = navLinks[i];
			navHead[i].classList.toggle("active");
			if (curNavLinks.style.maxHeight) {
				curNavLinks.style.maxHeight = null;
			} else {
				curNavLinks.style.maxHeight = curNavLinks.scrollHeight + "px";
			};
		});
	};
}

initializeNavHighlight = function () { // New function for highlighting the current page
    let currentPath = window.location.pathname; 

    if (currentPath.endsWith('/')) {
        currentPath = currentPath + 'index.html'; 
    }

    // Use document.querySelector to find the container
    const navBar = document.getElementById('navBar');

    if (!navBar) {
        console.warn("Cannot initialize nav highlight: #navBar not found.");
        return; // Exit if the element isn't there yet
    }
    
    // Select links after confirming #navBar exists
    const navLinks = navBar.querySelectorAll('li a'); 

    navLinks.forEach(function(link) {
        let linkHref = link.getAttribute('href');

        // IMPORTANT: Check for 'active' class (Fix 2)
        if (linkHref === currentPath) { 
            link.classList.add('active'); // Use 'active' here'
		} else if (linkHref) {
            link.classList.remove('active');
		};
    });
}

// LOAD PAGE
loadLayout = async function () { // Load all common layout elements
	await Promise.all([
		loadComponent("/classroom/template/loader.html", "loader-placeholder"),
		loadComponent("/classroom/template/navbar.html", "navbar-placeholder")
	]);

	initializeSearchBar();
	findHeadNavButton();
	initializeNavHighlight();
};

loadPageComponents = async function () { // Function to load page-specific components
	const headerPlaceholder = document.getElementById("header-placeholder"); // Find the header placeholder

	if (headerPlaceholder) { // Check if the placeholder exists
		const headerFile = headerPlaceholder.getAttribute("data-header-file"); // Get the specific header file name from the 'data-header-file' attribute
		if (headerFile) {
			const headerPath = `/classroom/template/${headerFile}`;
			await loadComponent(headerPath, "header-placeholder");
		} else {
			console.warn("No 'data-header-file' attribute found on 'header-placeholder'.");
		}
	}

	// add more page-specific parts here using the same pattern
}

// --- CORE LOADER LOGIC ---

/**
 * Waits until an element is available in the DOM, then executes a callback.
 * This is a robust way to ensure the #loader element exists.
 * @param {string} selector - The CSS selector for the element (e.g., '#loader').
 * @param {function} callback - The function to run once the element is found.
 */
waitForElement = function (selector, callback) {
	const checkElement = () => {
		const element = document.querySelector(selector);
		if (element) {
			callback(element);
		} else {
			// If not found, check again in 50 milliseconds
			setTimeout(checkElement, 50);
		}
	};
	// Start the check
	checkElement();
}

function hideLoader() { // hide loader using css
	waitForElement('#loader', (loader) => { // Use the robust checker to ensure #loader is in the DOM
		loader.classList.add('loader-hidden');
	});
}

window.addEventListener('load', () => {
	hideLoader();
});

loadLayout();
loadPageComponents();