# frozen_string_literal: true

class Api::Oxygen::Admin::CylinderSearchController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!
  before_action :authenticate_admin_user_using_x_auth_token!

  def search
    render json: Oxygen::CylinderSearchService.new(search_params).search
  end

  private
    def search_params
      params.require(:cylinder).permit(:serial_number, :capacity, :vendor_id, :category, :status)
    end
end