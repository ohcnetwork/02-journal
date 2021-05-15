class CreateCylinders < ActiveRecord::Migration[6.0]
  def change
    create_table :cylinders, id: :uuid do |t|
      t.uuid :vendor_id
      t.timestamps
    end
  end
end
