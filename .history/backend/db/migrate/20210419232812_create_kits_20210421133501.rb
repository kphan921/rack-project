class CreateKits < ActiveRecord::Migration[5.2]
  def change
    create_table :kits do |t|
      
      t.belongs_to :camera
      t.belongs_to :len
    
      t.timestamps
    end
    
  end
end
