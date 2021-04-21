class CreateCameras < ActiveRecord::Migration[5.2]
  def change
    create_table :cameras do |t|
      t.string :brand
      t.string :model
      t.integer :usage
    
      t.timestamps
    end
    
  end
end
