function resetButtons(){
	$('.toggles button').addClass('muted');
	$('link[href="css/main.css"]').remove();
    $('link[href="css/branding.css"]').remove();
}

$('#Text').click(function () {
	resetButtons();
    $('#Text').removeClass('muted');
});
$('#Wire').click(function () {
	resetButtons();
    $('head').append('<link id="WireCSS" rel="stylesheet" type="text/css" href="css/main.css">');
    $('#Wire').removeClass('muted');
});
$('#Full').click(function () {
	resetButtons();
	$('head').append('<link id="WireCSS" rel="stylesheet" type="text/css" href="css/main.css"><link id="FullCSS" rel="stylesheet" type="text/css" href="css/branding.css">');
    $('#Full').removeClass('muted');
});
$('.buy').click(function () {
	if($(this).hasClass('muted')){
		$(this).html('$1.99');
		$(this).removeClass('muted');
	}else{
		$(this).html('Purchased');
		$(this).addClass('muted');
	}	
});