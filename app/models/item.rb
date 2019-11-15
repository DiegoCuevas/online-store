class Item < ApplicationRecord
  belongs_to :order
  belongs_to :product

  after_create :cost_validate, :update_order

  private
  def cost_validate
    update(cost: product.price * quantity)
  end

  def update_order
    order.update(total_cost: order.total_cost + cost)
  end
end
