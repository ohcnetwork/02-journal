class AddAddressAndPhoneToVendors < ActiveRecord::Migration[6.0]
  def change
    add_column :vendors, :address, :text
    add_column :vendors, :phone, :string
  end
end
