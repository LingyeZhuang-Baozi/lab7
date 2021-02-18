'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	// Register a click handler
	$(".likeBtn").click(clickLike);
}

function clickLike(e) {
	console.log("Click recorded √");
	e.preventDefault();
	ga('create', 'UA-190127841-1', 'auto');
	ga("send", "event", "like", "click");
}