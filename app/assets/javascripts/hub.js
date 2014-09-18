$(function() {

	$("#new_build").bind('ajax:success', function(evt, data, status, xhr) {
		$("#build_name").val('')
		window.location.href = window.location
	})
	$(document).on('click','.title', function() {
		$(this).find('.border, .release').hide()
		$('#update-build-'+$(this).data('id')).show()
		$(this).on('ajax:success',"#edit_build_"+$(this).data('id'),function(evt,data,status,xhr) {
			window.location = window.location.href
		})
	})


	$(document).on('ajax:success',"form.new_feature", function(evt, data, status, xhr) {
		$(this).children("input[type='text']").val('')
		$("#feature-wrap-"+data.build_id).append("<p class='not-started' id='feature-"+data.id+"'' data-id='"+data.id+"'><span class='feature-item'>" + data.feature + "</span><span class='delete'>X</span></p>")
	})


	$(document).on('click','.feature p .feature-item',function() {
		feature_id = $(this).parent().data('id')
		feature_status = $(this).parent().data('status') ? $(this).parent().data('status') : 0
		feature_update = feature_status == 2 ? 0 : feature_status+1
		feature_json = {"id":feature_id,"status":feature_update}
		$.ajax({
			url: '/update-feature',
			type: "POST",
			data: feature_json,
			success: function(data) {
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

	$(document).on('click', '.feature p .delete', function() {
		feature_id = $(this).parent().data('id')
		feature_json = {"id":feature_id}
		$.ajax({
			url: '/remove-feature',
			type: "POST",
			data: feature_json,
			success: function(data) {
				$('#feature-'+feature_json.id).remove()
			},
			error: function() {
				console.log("Error posting data")
			}
		})
	})
})
