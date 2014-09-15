class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.integer :build_id
      t.text :feature
      t.integer :status
      t.text :details
      t.text :reference_link
      t.string :completed_by

      t.timestamps
    end
  end
end
