class AddStationIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :station_id, :uuid
  end
end
