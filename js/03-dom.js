//전역변수
var $listwrap = $(".list-wrap");
var tag = '<h2>추가내용</h2>';

//이벤트등록
$('#btAppend').click(onAppend);
$('#btPrepend').click(onPrepend);
$('#btEmpty').click(onEmpty);
$('#btRemove').click(onRemove);
$('#btHtml').click(onHtml);
$('#btText').click(onText);
$('#btReset').click(onReset);

//이벤트 콜백 
function onAppend() {
    $listwrap.append(tag);
    $(tag).appendTo($listwrap);
}

function onPrepend() {
    $listwrap.prepend(tag);
    $(tag).prependTo($listwrap);
}

function onEmpty() {
    $listwrap.empty();
}

function onRemove() {
    $listwrap.remove();
}

function onHtml() {
    $listwrap.html('<h1>Hello</h1>');
}

function onText() {
    $listwrap.text('<h1>Hello</h1>');
}

function onReset() {
    $('.container').html('<div class="list-wrap text-center"><div>======== 기준 ========</div></div>')
}