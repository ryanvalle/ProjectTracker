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
end
