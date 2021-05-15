# frozen_string_literal: true

class Api::Oxygen::Admin::VendorsController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!
  before_action :authenticate_admin_user_using_x_auth_token!

  def create
    vendor = Oxygen::Vendor.new(vendor_params)

    if vendor.save
      render json: vendor, status: :ok
    else
      render json: vendor.errors, status: :unprocessable_entity
    end
  end

  def update
    vendor = Oxygen::Vendor.find(params[:id])

    if vendor.update(vendor_params)
      render json: vendor, status: :ok
    else
      render json: vendor.errors, status: :unprocessable_entity
    end
  end

  def index
    render json: Oxygen::Vendor.all
  end

  private
    def vendor_params
      params.require(:vendor).permit(:name)
    end
end