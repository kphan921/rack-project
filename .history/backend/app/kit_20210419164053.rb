class Kit < ActiveRecord::Base
    belongs_to :camera
    belongs_to :len
end