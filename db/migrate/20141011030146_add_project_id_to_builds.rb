class AddProjectIdToBuilds < ActiveRecord::Migration
  def up
  	add_column :builds, :project_id, :integer
  end

  def down
  	remove_column :builds, :project_id
  end
end
