class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :prod_url
      t.string :stage_url
      t.string :qa_url
      t.string :dev_url
      t.string :git_url

      t.timestamps
    end
  end
end
