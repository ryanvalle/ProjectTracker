class Feature < ActiveRecord::Base
	belongs_to :build
	validates_presence_of :feature
end
