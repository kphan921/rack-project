class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)


    if req.path.match(/gears/) 
      cameras = Camera.all
      lens = Len.all
      kits = Kit.list
      
      
      return [200, { 'Content-Type' => 'application/json' }, [ {:cameras => cameras, :lens => lens, :kits => kits}.to_json ]]
    
    elsif req.path.match(/lens/) && req.post?
      data = JSON.parse req.body.read
      len = Len.create(brand: data["brand"], image: data["image"], focal_length: data["focal_length"], aperture: data["aperture"])
      res_len = {id: len.id, brand: len.brand, image: len.image, focal_length: len.focal_length, aperture: len.aperture}

      return [200, { 'Content-Type' => 'application/json' }, [ res_len.to_json ]] 

    elsif req.path.match(/cameras/) && req.post?
      data = JSON.parse req.body.read
      camera = Camera.create(usage:0, model: data["model"], brand: data["brand"], image: data["image"])
      res_camera = {usage:camera.usage, id: camera.id, model: camera.model, brand: camera.brand, image: camera.image}

      return [200, { 'Content-Type' => 'application/json' }, [ res_camera.to_json ]]

    elsif req.path.match(/kits/) && req.post?
      data = JSON.parse req.body.read
      kit= Kit.create(name: data["name"], camera_id: data["camera_id"], len_id: data["len_id"])
      res_kit = {id:kit.id, name: kit.name, camera: kit.camera, len: kit.len}

      return [200, { 'Content-Type' => 'application/json' }, [ res_kit.to_json ]]

    elsif req.path.match(/cameras/) && req.patch?
      id = req.path.split("/cameras/").last
      camera = Camera.find(id)
      data = JSON.parse req.body.read
      camera.update(data)

      return [200, { 'Content-Type' => 'application/json' }, [ camera.to_json ]]  

    elsif req.path.match(/lens/) && req.patch?
      id = req.path.split("/lens/").last
      len = Len.find(id)
      data = JSON.parse req.body.read
      len.update(data)

      return [200, { 'Content-Type' => 'application/json' }, [ len.to_json ]]   


    elsif req.path.match(/lens/) && req.delete?
      id = req.path.split("/lens/").last
      Len.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    elsif req.path.match(/cameras/) && req.delete?
      id = req.path.split("/cameras/").last
      Camera.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    elsif req.path.match(/kits/) && req.delete?
      id = req.path.split("/kits/").last
      Kit.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
