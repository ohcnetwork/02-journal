class AddStatusCapacityCategoryToCylinders < ActiveRecord::Migration[6.0]
  def change
    add_column :cylinders, :status, :integer, default: 1
    add_column :cylinders, :category, :integer, default: 1
    add_column :cylinders, :capacity, :integer, default: 1
    add_column :cylinders, :serial_number, :string, default: ""
  end
end
