class MessagesController < ApplicationController
  def index
    id = rand(1..Message.count)
    @message = Message.find(id)
    render json: @message
  end
end
