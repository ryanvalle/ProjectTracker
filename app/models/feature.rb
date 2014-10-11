# == Schema Information
#
# Table name: features
#
#  id             :integer          not null, primary key
#  build_id       :integer
#  feature        :text
#  status         :integer
#  details        :text
#  reference_link :text
#  completed_by   :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

class Feature < ActiveRecord::Base
	belongs_to :build
	validates_presence_of :feature
end
