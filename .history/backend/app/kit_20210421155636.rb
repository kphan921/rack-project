class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len

    def self.list 
        self.all.map{|kit| {kit.name, kit.camera, kit.len}}
    end

end