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

require 'test_helper'

class BuildTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
