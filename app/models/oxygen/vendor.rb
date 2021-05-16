# frozen_string_literal: true

module Oxygen
  class Vendor < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    has_many :cylinders, dependent: :destroy

    def add_cylinders!(n = 0, cylinder_params)
      new_cylinders = []

      n.to_i.times do
        new_cylinders << cylinders.create(cylinder_params)
      end

      new_cylinders
    end
  end
end