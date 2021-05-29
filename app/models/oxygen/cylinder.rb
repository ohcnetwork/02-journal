# frozen_string_literal: true

module Oxygen
  class Cylinder < ApplicationRecord
    belongs_to :vendor
    belongs_to :station, optional: true
    has_many :locations, class_name: "Oxygen::CylinderLocation"

    enum status: { empty: 1, filled: 2, faulty: 3, partially: 4 }
    enum category: { med: 1, ind: 2, arg: 3, nitrogen: 4 }
    enum capacity: { d: 1, b: 2, c: 3, h: 4 }
    enum entry_exit: { entry: 1, exit: 2 }

    before_save :generate_serial_number, if: :serial_number_empty?

    def record_location!
      if station.present?
        locations.create! station: station, status: status, capacity: capacity, entry_exit: entry_exit
      end
    end

    def qr_code_as_svg
      qrcode = RQRCode::QRCode.new(self.id)
      svg = qrcode.as_svg(
        color: "000",
        shape_rendering: "crispEdges",
        module_size: 5,
        standalone: true,
        use_path: true
      )
    end

    def serial_number_empty?
      serial_number.blank?
    end

    def generate_serial_number
      self.serial_number = SerialNumberGeneratorService.new(vendor.name).generate
    end

    def serializable_hash(options = {})
      if station.present?
        station_data = station.as_json
      else
        station_data = {}
      end

      new_options = { station: station_data }

      super.merge(new_options)
    end
  end
end