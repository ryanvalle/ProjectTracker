module HubHelper
	def status(feature)
		case feature.status
		when 2
			p "completed"
		when 1
			p "in-progress"
		else
			p "not-started"
		end 
	end

	def status_with_text(feature)
		case feature.status
		when 2
			p "<td class='status completed'>DONE</td>".html_safe
		when 1
			p "<td class='status in-progress'>DEVELOPMENT</td>".html_safe
		else
			p "<td class='status not-started'>QUEUED</td>".html_safe
		end 
	end
end
