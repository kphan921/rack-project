class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.string :brand
      t.string :aperture
      t.string :focal_length
      t.integer :usage
      
      t.timestamps
    end
    
  end
end
