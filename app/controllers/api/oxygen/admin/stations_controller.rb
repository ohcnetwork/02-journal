# frozen_string_literal: true

class Api::Oxygen::Admin::StationsController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!
  before_action :authenticate_admin_user_using_x_auth_token!

  def create
    station = Oxygen::Station.new(station_params)

    if station.save
      render json: station, status: :ok
    else
      render json: station.errors, status: :unprocessable_entity
    end
  end

  def update
    station = Oxygen::Station.find(params[:id])

    if station.update(station_params)
      render json: station, status: :ok
    else
      render json: station.errors, status: :unprocessable_entity
    end
  end

  def destroy
    station = Oxygen::Station.find(params[:id])

    if station.destroy
      render json: station
    else
      render json: { errors: station.errors }
    end
  end

  def index
    render json: Oxygen::Station.all
  end

  def cylinders
    station = Oxygen::Station.find(params[:id])
    render json: Oxygen::Cylinder.where(station_id: station.id, entry_exit: "entry")
  end

  private
    def station_params
      params.require(:station).permit(:name, :phone, :address, :lb_code)
    end
end