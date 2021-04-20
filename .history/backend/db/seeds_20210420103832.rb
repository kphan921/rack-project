Camera.destroy_all
Len.destroy_all
Kit.destroy_all


#cameras

Camera.create(model: "EOS R5")
Camera.create(model: "EOS R6")
Camera.create(model: "EOS 5D Mark IV")
Camera.create(model: "EOS 6D Mark III")
Camera.create(model: "EOS 80D"
Camera.create(model: "Z 7II")
Camera.create(model: "D850")
Camera.create(model: "Z50")
Camera.create(model: "D3500")
Camera.create(model: "D6")
Camera.create(model: "a7 III")
Camera.create(model: "a7c")
Camera.create(model: "a7R IV")
Camera.create(model: "a7S III")
Camera.create(model: "a1")
Camera.create(model: "X-Pro3")
Camera.create(model: "X-T4")
Camera.create(model: "X-T30")
Camera.create(model: "X-S10")
Camera.create(model: "X-E4")


#lens
Len.create(focal_length:"14-24mm", aperture:"f/2.8")
Len.create(focal_length:"50mm", aperture:"f/1.4")
Len.create(focal_length:"35mm", aperture:"f/1.8")
Len.create(focal_length:"85mm", aperture:"f/1.4")
Len.create(focal_length:"28-70mm", aperture:"f/2")
Len.create(focal_length:"20mm", aperture:"f/1.8")
Len.create(focal_length:"24-105mm", aperture:"f/4")
Len.create(focal_length:"28-60mm", aperture:"f/4-5.6")
Len.create(focal_length:"16-55mm", aperture:"2.8")
Len.create(focal_length:"200-600mm", aperture:"f/5.6-6.3")
Len.create(focal_length:"14mm", aperture:"f/2.8")
Len.create(focal_length:"8mm", aperture:"3")
Len.create(focal_length:"70-200mm", aperture:"f/2.8")
Len.create(focal_length:"130mm", aperture:"f/2")


#kit
10.times {
    Kit.create(
    camera_id: Camera.ids.sample,
    len_id: Len.ids.sample
)}