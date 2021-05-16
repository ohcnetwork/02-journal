# frozen_string_literal: true

module Oxygen
  class Vendor < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :phone, presence: true
    has_many :cylinders, dependent: :destroy

    def add_cylinders!(params_cylinders)
      new_cylinders = []

      params_cylinders.values.each do |cylinder_params|
        new_cylinders << cylinders.create(cylinder_params)
      end

      new_cylinders
    end
  end
end