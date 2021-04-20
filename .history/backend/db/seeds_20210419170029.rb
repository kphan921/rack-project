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
10.times {
    Camera.create(
        model: Faker::Creature::Dog.name, 
        brand_id: Brand.ids.sample
    )
}

#lens
12.times {Len.create(
    model: Faker::Creature::Cat.name,
    focal_length: fl.rand  
    aperture: 
    )
}

60.times {Appointment.create(cost: Faker::Commerce.price, veterinarian_id: Veterinarian.ids.sample, pet_id: Pet.ids.sample )}