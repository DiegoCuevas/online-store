class Api::ItemsController < ApiController
  
  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    render json: Item.create(item_params)
  end

  def update
    render json: Item.find(params[:id].update(item_params))
  end

  def delete
    item = Item.find_by(id: params[:id])
    Item.destroy
    render :status => :no_content
  end

  private 
  
  def item_params
    params.permit(:order_id, :product_id, :quantity, :cost)
  end
end