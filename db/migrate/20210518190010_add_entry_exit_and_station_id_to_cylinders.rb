class AddEntryExitAndStationIdToCylinders < ActiveRecord::Migration[6.0]
  def change
    add_column :cylinders, :entry_exit, :integer, default: 1
    add_column :cylinders, :station_id, :uuid
  end
end
