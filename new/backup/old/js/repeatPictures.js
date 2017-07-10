function appendPhotosToParagraph(times) {
	coins= ''
	console.log(times.slice(5))
	for (var i = 0; i < times.slice(5); i++) {
		coins += '<img src="assets/penny.png"   alt="1 penny" 	height="10%" 	width="10%"  />';
	}
	$(coins).insertAfter('.'+times);
}
function appendDollarCoinsToBill() {
	coins = '';
	for (var i = 0; i < 5; i++) {
       coins  += '<img src="assets/loonie.png"   alt="1 dollar coin" 	height="10%" 	width="10%"  />';
    }
    $(coins).insertAfter('.times500');
}

appendPhotosToParagraph('times5');
appendPhotosToParagraph('times10');
appendPhotosToParagraph('times25');
appendPhotosToParagraph('times100');
appendPhotosToParagraph('times200');
appendDollarCoinsToBill();