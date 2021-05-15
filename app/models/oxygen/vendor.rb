# frozen_string_literal: true

module Oxygen
  class Vendor < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    has_many :cylinders, dependent: :destroy

    def add_cylinders!(n = 0)
      n.to_i.times do
        cylinders.create
      end
    end
  end
end