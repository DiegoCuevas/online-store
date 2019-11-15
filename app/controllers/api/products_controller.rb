class Api::ProductsController < ApiController
  
  def index
    render json: Product.all
  end

  def show
    render json: Product.find(params[:id])
  end

  def create
    render json: Product.create(product_params)
  end

  def update
    render json: Product.find(params[:id]).update(product_params)
  end

  def delete
    product = Product.find_by(id: params[:id])
    Product.destroy
    render :status => :no_content
  end

  private 
  
  def product_params
    params.permit(:store_id, :price, :description, :name)
  end
end