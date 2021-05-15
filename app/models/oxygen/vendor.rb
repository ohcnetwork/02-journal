# frozen_string_literal: true

module Oxygen
  class Vendor < ApplicationRecord
    validates :name, presence: true, uniqueness: true
  end
end