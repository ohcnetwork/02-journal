# frozen_string_literal: true

class Api::Oxygen::CylindersController < Api::V1::BaseController
  def update
    cylinder = Oxygen::Cylinder.find(params[:id])

    if cylinder.update cylinder_params.merge(station_id: @user.station_id)
      cylinder.touch
      cylinder.record_location!
      render json: cylinder.reload
    else
      render json: { errors: cylinder.errors }
    end
  end

  private

    def cylinder_params
      params.require(:cylinder).permit(:entry_exit, :status)
    end
end
