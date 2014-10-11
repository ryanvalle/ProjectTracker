# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  prod_url   :string(255)
#  stage_url  :string(255)
#  qa_url     :string(255)
#  dev_url    :string(255)
#  git_url    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
