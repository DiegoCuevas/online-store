class AddColumnsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :price, :integer
    add_column :products, :name, :string
    add_column :products, :description, :string
  end
end
