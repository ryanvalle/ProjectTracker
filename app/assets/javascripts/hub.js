$(function() {
	$("#new_build").bind('ajax:success', function(evt, data, status, xhr) {
		$("#build_name").val('')
		window.location.href = window.location
	})

	$(document).on('ajax:success',"form.new_feature", function(evt, data, status, xhr) {
		console.log(data)
		$(this).children("input[type='text']").val('')
		$("#feature-"+data.build_id).append("<p class='not-started' id='feature-"+data.id+"'' data-id='"+data.id+"'>" + data.feature + "</p>")
	})

	$(document).on('click','.feature p',function() {
		feature_id = $(this).data('id')
		feature_status = $(this).data('status') ? $(this).data('status') : 0
		feature_update = feature_status == 2 ? 0 : feature_status+1
		feature_json = {"id":feature_id,"status":feature_update}
		$.ajax({
			url: '/update-feature',
			type: "POST",
			data: feature_json,
			success: function(data) {
				console.log(data.id)
				$('#feature-'+data.id).data('status', data.status)
				switch (data.status) {
					case 1:
						$('#feature-'+data.id).removeClass().addClass('in-progress')
						break;
					case 2:
						$('#feature-'+data.id).removeClass().addClass('completed')
						break;				
					default:
						$('#feature-'+data.id).removeClass().addClass('not-started')
						break;
				}
			},
			error: function() {
				console.log("Error posting data")
			}
		})
	})
})
