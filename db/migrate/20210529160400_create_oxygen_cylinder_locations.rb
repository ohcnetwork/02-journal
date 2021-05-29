class CreateOxygenCylinderLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :cylinder_locations, id: :uuid do |t|
      t.uuid :station_id, :cylinder_id
      t.integer :status, :capacity, :entry_exit
      t.timestamps
    end
  end
end
