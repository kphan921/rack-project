class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.string :aperture
      t.string :focal_length
      
      t.timestamps
    end
    
  end
end
