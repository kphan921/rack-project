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
      len = Len.create(focal_length: data["focal_length"], aperture: data["aperture"])
      res_len = {id: len.id, focal_length: len.focal_length, aperture: len.aperture}

      return [200, { 'Content-Type' => 'application/json' }, [ res_len.to_json ]] 

    elsif req.path.match(/cameras/) && req.post?
      data = JSON.parse req.body.read
      camera = Camera.create(model: data["model"])
      res_camera = {id: camera.id, model: camera.model}

      return [200, { 'Content-Type' => 'application/json' }, [ res_camera.to_json ]]   


    elsif req.delete?
      id = req.path.split("/lens/").last
      Len.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    elsif req.delete?
      id = req.path.split("/cameras/").last
      Camera.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
