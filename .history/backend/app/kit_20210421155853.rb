class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len

    def self.list 
        self.all.map{|kit| {name: kit.name,camera: kit.camera,kit: kit.len}}
    end

end