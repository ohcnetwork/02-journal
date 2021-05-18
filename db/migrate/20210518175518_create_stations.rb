class CreateStations < ActiveRecord::Migration[6.0]
  def change
    create_table :stations, id: :uuid do |t|
      t.string :name, :phone, :address, :lb_code
      t.timestamps
    end
  end
end