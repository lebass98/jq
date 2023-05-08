$(function(){
	$('.studyArea, .flex-code, .css-code').each(function(i){
		var codeArea = $(this);
		var codeHtml = codeArea.html();
		if(codeArea.hasClass('hidden')) codeArea.empty(); // 코드미러로 그려지고나서 원본 소스 삭제
		CodeMirror($(this)[0], {
			value: codeHtml,
			mode: 'htmlmixed',
			lineNumbers: !$(this).is('.inline'),
			readOnly: true,
			styleActiveLine: false,
			autoClearEmptyLines:true,
			lineWrapping: true,
			matchBrackets: true,
			theme: 'monokai'
		});
	});
});