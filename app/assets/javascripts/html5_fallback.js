$(document).ready(function() {
	if(!Modernizr.inputtypes.date) {
		$('input[type=date]').datepicker({
			dateFormat: 'dd/mm/yy'
		})
	}
})