class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len

    def self.list 
        self.all.map{|kit| {id: kit.id, name: kit.name, camera: kit.camera, len: kit.len}}
    end

end