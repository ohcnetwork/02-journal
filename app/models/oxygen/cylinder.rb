# frozen_string_literal: true

module Oxygen
  class Cylinder < ApplicationRecord
    belongs_to :vendor
    enum status: { empty: 1, filled: 2, faulty: 3, partially: 4 }
    enum category: { med: 1, ind: 2, arg: 3, nitrogen: 4 }
    enum capacity: { d: 1, b: 2, c: 3, h: 4 }

    before_save :generate_serial_number, if: :serial_number_empty?

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
  end
end