// Make Markup Label
const markupLabel = document.createElement('p');
markupLabel.classList.add('ss-label');
markupLabel.innerHTML = 'TKTKTKTK by <a class="ss-label__link" href="https://themarkup.org" target="_blank">The Markup</a>';

// Make close button
const closeButton = document.createElement('div');
closeButton.classList.add('ss-close');
closeButton.innerHTML = '<p class="ss-close__label">View Original Results</p><svg version="1.1" class="ss-close__button" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1024 1024" xml:space="preserve"><path d="M91.6 91.6l840.8 840.8M932.4 91.6L91.6 932.4"/></svg>';
closeButton.addEventListener('click', function() {
	document.querySelector('html').classList.remove('ss--has-results');
});

// Make header
const controls = document.createElement('div');
controls.classList.add('ss-header');
controls.appendChild(markupLabel);
controls.appendChild(closeButton);

// Make results box
const results = document.createElement('div');
results.classList.add('ss-results');

// Make footer
const explanation = document.createElement('div');
explanation.classList.add('ss-footer');
explanation.innerHTML = '<h3 class="ss-footer__title">TK TK TK</h3><p class="ss-footer__description">TK TKTKTKTKTKTKTTKTK TK TK <a class="ss-footer__link" target="_blank" href="https://themarkup.org">themarkup.org</a></p>';

// Make box
const viewbox = document.createElement('div');
viewbox.classList.add('ss-box');
viewbox.appendChild(controls);
viewbox.appendChild(results);
viewbox.appendChild(explanation);

// Make blur box 
const blurbox = document.createElement('div');
blurbox.classList.add('ss-blurbox');
blurbox.appendChild(viewbox);

function showPopup() {
	// Get Page Results
	//var whereAmI = window.location.hostname;
	//alert(whereAmI);
	//if whereAmI.includes('google') {
		var whereAmI = window.location.hostname;
		if (whereAmI.includes('google')) {
			const googleResults = document.querySelectorAll('.rc');
	
			if (googleResults.length > 0) {
				// Add placeholder for results if we've found results
				document.querySelector('body').prepend(blurbox);
	
				// Populate new results with those clean results
				googleResults.forEach(function(result, i) {
					console.log(result);
					const linkEl = result.querySelector('a');
					const url = linkEl.href;
					const rel = linkEl.rel;
					const title = result.querySelector('h3').innerHTML;
					const desc = result.querySelector('div > div > span > span:last-of-type');
					const cite = result.querySelector('cite');
	
					if (desc && cite) {
						results.innerHTML += '<div class="ss-result"><h4 class="ss-result__cite">' + cite.innerText + '</h4><a href="' + url + '" rel="' + rel + '" class="ss-result__link">' + title + '</a><p class="ss-result__description">' + desc.innerHTML + '</p></div>';
					}
				});
	
				// Set a class to make it all visible
				document.querySelector('html').classList.add('ss--has-results');
			}
		} else if (whereAmI.includes('bing')) {
			const bingResults = document.querySelectorAll('.b_algo');

			if (bingResults.length > 0) {
				document.querySelector('#b_results').prepend(viewbox);
		
				bingResults.forEach(function (result, i) {
					console.log(result);
					const linkEl = result.querySelector('h2 > a');
					const url = linkEl.href;
					const rel = linkEl.rel;
					const title = linkEl.innerHTML;
					const desc = result.querySelector('p');
					const cite = result.querySelector('cite');
		
					if (desc && cite) {
						results.innerHTML += '<div class="ss-result">' + '<a href="' + url + '" rel="' + rel + '" class="ss-result__link">' + title + '</a>' + '<h4 class="ss-result__cite">' + cite.innerText + '</h4>' + '<p class="ss-result__description">' + desc.innerHTML + '</p></div>';
					}
				});
		
				document.querySelector('html').classList.add('ss--has-results');

			}
		}
	/*} else if whereAmI.includes('bing') {
	}*/
}

showPopup();