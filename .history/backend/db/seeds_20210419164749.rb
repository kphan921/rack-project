Brand.destroy_all
Camera.destroy_all
Len.destroy_all
Kit.destroy_all

b = ["Canon", "Nikon", "Sony", "Fujifilm"]
 = ["LA", "SF", "Seattle", "NYC"]

3.times { Owner.create(name: Faker::Name.name) }

4.times {
    Pet.create(
        name: Faker::Creature::Dog.name, 
        conditions: cons.sample, 
        owner_id: Owner.ids.sample
    )
}

7.times {Veterinarian.create(name: Faker::Name.name, location: locs.sample)}

60.times {Appointment.create(cost: Faker::Commerce.price, veterinarian_id: Veterinarian.ids.sample, pet_id: Pet.ids.sample )}