class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len

    def self.list 
        self.all.map{|kit| [kit.camera, kit.len]}
    end

end