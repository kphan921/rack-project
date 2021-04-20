class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.string :model
      t.belongs_to :camera
      t.belongs_to :brand
      t.float :focal_length
      t.integer :aperture 
      
      t.timestamps
    end
    
  end
end
