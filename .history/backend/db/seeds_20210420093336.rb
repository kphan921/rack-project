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

Camera.create(model: , brand_id: "Canon")
Camera.create(model: , brand_id: "Canon")
Camera.create(model: , brand_id: "Canon")
Camera.create(model: , brand_id: "Canon")
Camera.create(model: , brand_id: "Canon")
Camera.create(model: , brand_id: "Nikon")
Camera.create(model: , brand_id: "Nikon")
Camera.create(model: , brand_id: "Nikon")
Camera.create(model: , brand_id: "Nikon")
Camera.create(model: , brand_id: "Nikon")
Camera.create(model: , brand_id: "Sony")
Camera.create(model: , brand_id: "Sony")
Camera.create(model: , brand_id: "Sony")
Camera.create(model: , brand_id: "Sony")
Camera.create(model: , brand_id: "Sony")
Camera.create(model: "X-Pro3" , brand_id: "Fujifilm")
Camera.create(model: "X-T4" , brand_id: "Fujifilm")
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