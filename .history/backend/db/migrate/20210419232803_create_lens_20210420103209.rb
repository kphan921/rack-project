class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.float :aperture
      t.integer :focal_length
      
      t.timestamps
    end
    
  end
end
