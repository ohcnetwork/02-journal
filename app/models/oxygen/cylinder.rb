# frozen_string_literal: true

module Oxygen
  class Cylinder < ApplicationRecord
    belongs_to :vendor

    def qr_code_as_svg
      qrcode = RQRCode::QRCode.new(update_url)
      svg = qrcode.as_svg(
        color: "000",
        shape_rendering: "crispEdges",
        module_size: 5,
        standalone: true,
        use_path: true
      )
    end

    def update_url
      "#{ENV['BASE_URL']}/oxygen/vendors/#{vendor_id}/cylinders/#{id}"
    end
  end
end