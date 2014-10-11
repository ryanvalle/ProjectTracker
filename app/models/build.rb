# == Schema Information
#
# Table name: builds
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  release    :date
#  created_at :datetime
#  updated_at :datetime
#  project_id :integer
#

class Build < ActiveRecord::Base
	validates_presence_of :name
	validates_presence_of :release
	belongs_to :project
	has_many :features
end
