class RenameUserPhoneNumberToPhone < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :phone_number, :phone
  end
end
