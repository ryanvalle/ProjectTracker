class Build < ActiveRecord::Base
	validates_presence_of :name
	has_many :features
end
