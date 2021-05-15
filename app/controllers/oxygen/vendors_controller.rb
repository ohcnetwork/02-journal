# frozen_string_literal: true

class Oxygen::VendorsController < ApplicationController
  def qr_codes
    @vendor = Oxygen::Vendor.find(params[:id])
    @cylinders = @vendor.cylinders
  end
end