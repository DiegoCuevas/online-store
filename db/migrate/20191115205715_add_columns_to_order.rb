class AddColumnsToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :destination, :string
    add_column :orders, :status, :string
  end
end
