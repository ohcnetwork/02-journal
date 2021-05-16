# frozen_string_literal: true

class Oxygen::VendorsController < ApplicationController
  def qr_codes
    @vendor = Oxygen::Vendor.find(params[:id])
    if params[:ids].present?
      @cylinders = @vendor.cylinders.where(id: params[:ids].split(","))
    else
      @cylinders = @vendor.cylinders
    end
  end
end