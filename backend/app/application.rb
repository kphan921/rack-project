class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)


    if req.path.match(/gears/) 
      cameras = Camera.all
      lens = Len.all
      return [200, { 'Content-Type' => 'application/json' }, [ {:cameras => cameras, :lens => lens}.to_json ]]
    
    elsif req.path.match(/lens/) && req.post?

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
