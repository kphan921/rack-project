class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)


    if req.path.match(/gears/) 
      cameras = Camera.all
      lens = Len.all
      return [200, { 'Content-Type' => 'application/json' }, [ {:cameras => cameras, :lens => lens}.to_json ]]
    
    elsif req.path.match(/lens/) && req.post?

    elsif req.path.match(/cameras/) && req.post?

      data = JSON.parse req.body.read
      camera = Camera.create(model: data["model"])

      res_camera = {id: camera.id, model: camera.model}

      return [200, { 'Content-Type' => 'application/json' }, [ res_camera.to_json ]]   

    elsif req.delete?

      id = req.path.split("/gears/").last
      Camera.find(id).delete
      Len.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
