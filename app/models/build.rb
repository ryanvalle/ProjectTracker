class Build < ActiveRecord::Base
	validates_presence_of :name
	validates_presence_of :release
	has_many :features
end
