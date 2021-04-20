class Lens < ActiveRecord::Base
    has_many :kits
    has_many :cameras, through: :kits
end