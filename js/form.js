$(function(){
	$('#priceinpt').priceFormat({
		prefix: 'R$ ',
		centsSeparator: ',',
		thousandsSeparator: '.',
		allowNegative: false
	});
});