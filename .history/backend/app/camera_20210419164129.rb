class Camera < ActiveRecord::Base
    belongs_to :brand
    has_many :kits
end