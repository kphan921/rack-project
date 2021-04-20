class CreateCameras < ActiveRecord::Migration[5.2]
  def change
    create_table :cameras do |t|
      t.string :model
      t.belongs_to :brand
    
      t.timestamps
    end
    
  end
end
