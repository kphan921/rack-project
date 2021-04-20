Brand.destroy_all
Camera.destroy_all
Len.destroy_all
Kit.destroy_all

fl = [12, 35, 50, 85, 135]
a = [1.2, 1.4, 2, 2.2, 4]


 #brands
Brand.create(name: "Canon")
Brand.create(name: "Nikon") 
Brand.create(name: "Sony") 
Brand.create(name: "Fujifilm")  

#cameras

Camera.create(model: "EOS R5", brand_id: "Canon")
Camera.create(model: "EOS R6", brand_id: "Canon")
Camera.create(model: "EOS 5D Mark IV", brand_id: "Canon")
Camera.create(model: "EOS 6D Mark III", brand_id: "Canon")
Camera.create(model: "EOS 80D", brand_id: "Canon")
Camera.create(model: "Z 7II", brand_id: "Nikon")
Camera.create(model: "D850", brand_id: "Nikon")
Camera.create(model: "Z50", brand_id: "Nikon")
Camera.create(model: "D3500", brand_id: "Nikon")
Camera.create(model: "D6", brand_id: "Nikon")
Camera.create(model: "a7 III", brand_id: "Sony")
Camera.create(model: "a7c", brand_id: "Sony")
Camera.create(model: "a7R IV", brand_id: "Sony")
Camera.create(model: "a7S III", brand_id: "Sony")
Camera.create(model: "a1", brand_id: "Sony")
Camera.create(model: "X-Pro3", brand_id: "Fujifilm")
Camera.create(model: "X-T4", brand_id: "Fujifilm")
Camera.create(model: "X-T30", brand_id: "Fujifilm")
Camera.create(model: "X-S10", brand_id: "Fujifilm")
Camera.create(model: "X-E4", brand_id: "Fujifilm")
# 10.times {
#     Camera.create(
#         model: Faker::Creature::Dog.name, 
#         brand_id: Brand.ids.sample
#     )
# }

#lens
12.times {
    Len.create(
    model: Faker::Creature::Cat.name,
    focal_length: fl.sample,  
    aperture: a.sample,
    camera_id: Camera.ids.sample
    )
}

#kit
10.times {
    Kit.create(
    camera_id: Camera.ids.sample,
    len_id: Len.ids.sample
)}