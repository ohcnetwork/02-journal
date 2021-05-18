# frozen_string_literal: true

class Api::Oxygen::SessionsController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!

  def create
    @user = User.where(phone: params[:user][:phone]).first

    if @user.blank?
      @user = User.create user_params
    else
      @user.update user_params
    end

    if @user.valid?
      render json: @user.reload
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :phone, :station_id)
    end
end
