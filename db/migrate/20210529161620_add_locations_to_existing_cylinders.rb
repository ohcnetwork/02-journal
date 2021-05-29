class AddLocationsToExistingCylinders < ActiveRecord::Migration[6.0]
  def change
    Oxygen::Cylinder.all.map(&:record_location!)
  end
end
