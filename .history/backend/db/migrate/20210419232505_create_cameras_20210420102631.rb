class CreateCameras < ActiveRecord::Migration[5.2]
  def change
    create_table :cameras do |t|
      t.string :model
    
      t.timestamps
    end
    
  end
end
