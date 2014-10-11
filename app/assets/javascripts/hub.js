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

	$(document).on('click','.status',function() {
		if ($(this).data('view') == 0) {
			$(this).parent().parent().find('.features').css('display','flex')
			$(this).parent().parent().find('.add-feature-form').show()
			$(this).data('view',1)
		} else {
			$(this).parent().parent().find('.features').css('display','none')
			$(this).parent().parent().find('.add-feature-form').hide()
			$(this).data('view',0)
		}
		
	})

	$(document).on('ajax:success',"form.new_feature", function(evt, data, status, xhr) {
		$(this).children("input[type='text']").val('')
		$("#feature-wrap-"+data.build_id).append("<p class='not-started' id='feature-"+data.id+"'' data-id='"+data.id+"'><span class='feature-item'>" + data.feature + "</span><span class='delete'>X</span></p>")
		processPercents()
	})


	$(document).on('click','.feature p .feature-item',function() {
		feature_id = $(this).parent().data('id')
		feature_status = $(this).parent().data('status') ? $(this).parent().data('status') : 0
		feature_update = feature_status == 2 ? 0 : feature_status+1
		feature_json = {"id":feature_id,"status":feature_update}
		$.ajax({
			url: '/build/update-feature',
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
				processPercents();
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
			url: '/build/remove-feature',
			type: "POST",
			data: feature_json,
			success: function(data) {
				$('#feature-'+feature_json.id).remove()
				processPercents()
			},
			error: function() {
				console.log("Error posting data")
			}
		})
	})
})

function processPercents() {
	$('.builds').each(function(){
		$(this).find('.build').each(function(){
			total_items = $(this).find('.features .feature p').length
			possible_score = total_items * 2
			not_started_score = $(this).find('.features .feature p.not-started').length * 0
			in_progress_score = $(this).find('.features .feature p.in-progress').length * 1
			completed_score = $(this).find('.features .feature p.completed').length * 2
			total_score = Math.floor( ( (not_started_score + in_progress_score + completed_score) / possible_score ) * 100)
			return_score = isNaN(total_score) ? 0 : total_score;
			$(this).find('.status .status-bar').animate({
				height: return_score+'%'
			}, 500)
			if (return_score < 100) {
				$(this).find('.features').attr('style','display:flex')
				$(this).find('.add-feature-form').show()
				$(this).find('.status').attr('data-view','1')
			}
		})
	})
}

$(document).ready(function() {
	processPercents()
})