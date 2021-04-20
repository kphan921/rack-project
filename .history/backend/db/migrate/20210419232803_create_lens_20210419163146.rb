class CreateLens < ActiveRecord::Migration[5.2]
  def change
    create_table :lens do |t|
      t.string :model
      t.belongs_to :camera
      t.belongs_to :brand
    
      t.timestamps
    end
    
  end
end
