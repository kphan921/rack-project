class Len < ActiveRecord::Base
    has_many :kits
    has_many :cameras, through: :kits
end