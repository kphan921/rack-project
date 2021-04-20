class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.string :model
      t.belongs_to :camera
      t.float :aperture
      t.integer :focal_length
      
      t.timestamps
    end
    
  end
end
