//p要素の作成
let p_element = document.createElement('p')


$(function() {

	shortcut.add("Ctrl+1",function() {
		$("#button").click();
		p_element.textContest = '登場人物1';
	});
	
});

$(function() {

	shortcut.add("Ctrl+2",function() {
		$("#button").click();
	});
	
});