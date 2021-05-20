# frozen_string_literal: true

class Api::Oxygen::StationsController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!

  def index
    render json: Oxygen::Station.all.select("id", "name")
  end
end