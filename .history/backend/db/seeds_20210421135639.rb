Camera.destroy_all
Len.destroy_all
Kit.destroy_all


#cameras

Camera.create(model: "EOS R5", brand: "Canon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/canon_eos_r5_mirrorless_digital_1594282826_1547009.jpg")
Camera.create(model: "EOS R6", brand: "Canon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/canon_eos_r6_mirrorless_digital_1594281159_1547010.jpg")
Camera.create(model: "EOS 5D Mark IV", brand: "Canon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274705.jpg")
Camera.create(model: "EOS 6D Mark II", brand: "Canon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/canon_eos_6d_mark_ii_1561852319_1346734.jpg")
Camera.create(model: "EOS 80D", brand: "Canon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/canon_1263c004_eos_80d_dslr_camera_1455749513_1225875.jpg")
Camera.create(model: "Z 7II", brand: "Nikon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/nikon_z_7_ii_mirrorless_1602636707_1597168.jpg")
Camera.create(model: "D850", brand: "Nikon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/nikon_d850_dslr_camera_body_1503543023_1351688.jpg")
Camera.create(model: "Z50", brand: "Nikon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/nikon_1634b_z_50_mirrorless_digital_1602496214_1597960.jpg")
Camera.create(model: "D3500", brand: "Nikon", usage: 0, image: "https://static.bhphoto.com/images/images500x500/nikon_d5600_dslr_camera_body_1483534103_1308818.jpg")
Camera.create(model: "D6", brand: "Nikon", usage: 0, image:)
Camera.create(model: "a7 III", brand: "Sony", usage: 0, image:)
Camera.create(model: "a7c", brand: "Sony", usage: 0, image:)
Camera.create(model: "a7R IV", brand: "Sony", usage: 0, image:)
Camera.create(model: "a7S III", brand: "Sony", usage: 0, image:)
Camera.create(model: "a1", brand: "Sony", usage: 0, image:)
Camera.create(model: "X-Pro3", brand: "Fujifilm", usage: 0, image:)
Camera.create(model: "X-T4", brand: "Fujifilm", usage: 0, image:)
Camera.create(model: "X-T30", brand: "Fujifilm", usage: 0, image:)
Camera.create(model: "X-S10", brand: "Fujifilm", usage: 0, image:)
Camera.create(model: "X-E4", brand: "Fujifilm", usage: 0, image:)


#lens
Len.create(focal_length:"14-24mm", aperture:"f/2.8", brand: "Sony", usage: 0, image:)
Len.create(focal_length:"50mm", aperture:"f/1.4", brand: "Canon", usage: 0, image:)
Len.create(focal_length:"35mm", aperture:"f/1.8", brand: "Nikon", usage: 0, image:)
Len.create(focal_length:"85mm", aperture:"f/1.4", brand: "Canon", usage: 0, image:)
Len.create(focal_length:"28-70mm", aperture:"f/2", brand: "Canon", usage: 0, image:)
Len.create(focal_length:"20mm", aperture:"f/1.8", brand: "Sony", usage: 0, image:)
Len.create(focal_length:"14-30mm", aperture:"f/4", brand: "Nikon", usage: 0, image:)
Len.create(focal_length:"24-105mm", aperture:"f/4", brand: , usage: 0, image:)
Len.create(focal_length:"28-60mm", aperture:"f/4-5.6", brand: , usage: 0, image:)
Len.create(focal_length:"16-55mm", aperture:"2.8", brand: , usage: 0, image:)
Len.create(focal_length:"200-600mm", aperture:"f/5.6-6.3", brand: , usage: 0, image:)
Len.create(focal_length:"14mm", aperture:"f/2.8", brand: , usage: 0, image:)
Len.create(focal_length:"8mm", aperture:"3", brand: , usage: 0, image:)
Len.create(focal_length:"70-200mm", aperture:"f/2.8", brand: , usage: 0, image:)
Len.create(focal_length:"130mm", aperture:"f/2", brand: , usage: 0, image:)


#kit
10.times {
    Kit.create(
    camera_id: Camera.ids.sample,
    len_id: Len.ids.sample
)}