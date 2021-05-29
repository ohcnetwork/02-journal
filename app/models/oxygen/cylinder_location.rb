# frozen_string_literal: true

module Oxygen
  class CylinderLocation < ApplicationRecord
    belongs_to :station
    belongs_to :cylinder

    enum status: { empty: 1, filled: 2, faulty: 3, partially: 4 }
    enum capacity: { d: 1, b: 2, c: 3, h: 4 }
    enum entry_exit: { entry: 1, exit: 2 }
  end
end
