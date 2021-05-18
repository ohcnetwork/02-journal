# frozen_string_literal: true

module Oxygen
  class Station < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :phone, presence: true
    validates :lb_code, presence: true
  end
end