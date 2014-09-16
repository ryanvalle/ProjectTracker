$(function() {
	$("#new_build").bind('ajax:success', function(evt, data, status, xhr) {
		$("#build_name").val('')
		window.location.href = window.location
	})
})