# frozen_string_literal: true

class Api::Oxygen::Admin::CylindersController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!
  before_action :authenticate_admin_user_using_x_auth_token!
  before_action :find_vendor

  def add
    @vendor.add_cylinders!(params[:count] || 0)
    head :ok
  end

  def qr_codes
    head :ok
  end

  private
    def find_vendor
      @vendor = Oxygen::Vendor.find(params[:vendor_id])
    end
end