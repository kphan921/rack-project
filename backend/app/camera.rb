class Camera < ActiveRecord::Base
    belongs_to :brand
    has_many :kits
    has_many :lens, through: :kits
end