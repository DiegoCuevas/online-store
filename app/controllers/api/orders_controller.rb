class Api::OrdersController < ApiController
  
  def index
    render json: Order.all.as_json(include: :items)
  end

  def show
    render json: Order.find(params[:id])
  end

def create
  order = Order.new(order_params)
  if order.save
    render json: order, status: :ok
  else
    render json: {errors: order.errors}, status: :bad_request
  end
end

  def update
    render json: Order.find(params[:id].update(order_params))
  end

  def delete
    order = Order.find_by(id: params[:id])
    Order.destroy
    render :status => :no_content
  end

  private 
  
  def order_params
    params.require(:order).permit(:user_id, :store_id, :total_cost, :destination, :status ,:items_attributes =>[:product_id, :quantity])
  end
end