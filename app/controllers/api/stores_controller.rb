class Api::StoresController < ApiController
  
  def index
    render json: Store.all
  end

  def show
    render json: Store.find(params[:id])
  end

  def create
    render json: Store.create(store_params)
  end

  def update
    render json: Store.find(params[:id].update(store_params))
  end

  def delete
    Store = Store.find_by(id: params[:id])
    Store.destroy
    render :status => :no_content
  end

  private 
  
  def store_params
    params.permit(:name)
  end
end