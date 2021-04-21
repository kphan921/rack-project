class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len

    def self.list 
        self.map{|kit| [kit.camera, kit.len]}
    end

end