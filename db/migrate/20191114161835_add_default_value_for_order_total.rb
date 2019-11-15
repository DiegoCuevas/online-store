class AddDefaultValueForOrderTotal < ActiveRecord::Migration[6.0]
  def change
    change_column_default :orders, :total_cost, 0
  end
end
