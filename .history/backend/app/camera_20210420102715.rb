class Camera < ActiveRecord::Base
    has_many :kits
    has_many :lens, through: :kits
end