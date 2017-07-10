function appendPhotosToParagraph(times) {
	var coins= '';
	for (var i = 0; i < times.slice(5); i++) { // write appropriate number of cents into document
		coins += '<img src="assets/penny.png"   alt="1 penny" 	height="10%" 	width="10%"  />';
	}
	$(coins).insertAfter('.'+times);
}
function appendDollarCoinsToBill() {
	var coins = '';
	for (var i = 0; i < 5; i++) { // write appropriate number of loonies into document
       coins  += '<img src="assets/loonie.png"   alt="1 dollar coin" 	height="10%" 	width="10%"  />';
    }
    $(coins).insertAfter('.times500');
}

appendPhotosToParagraph('times5'); // the numbers at the end tell the function how many times to insert the picture
appendPhotosToParagraph('times10');
appendPhotosToParagraph('times25');
appendPhotosToParagraph('times100');
appendPhotosToParagraph('times200');
appendDollarCoinsToBill();