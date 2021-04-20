Brand.destroy_all
Camera.destroy_all
Len.destroy_all
Kit.destroy_all


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

7.times {Veterinarian.create(name: Faker::Name.name, location: locs.sample)}

60.times {Appointment.create(cost: Faker::Commerce.price, veterinarian_id: Veterinarian.ids.sample, pet_id: Pet.ids.sample )}