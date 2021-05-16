# frozen_string_literal: true

module Oxygen
  class SerialNumberGeneratorService
    attr_reader :vendor_name

    def initialize(vendor_name)
      @vendor_name = vendor_name
    end

    def generate
      serial_number = _generate
      if Oxygen::Cylinder.exists?(serial_number: serial_number)
        generate
      end
      serial_number
    end

    def _generate
      "#{prefix}-#{random_number}"
    end

    def prefix
      name_array = vendor_name.split(" ")

      if name_array.count > 1
        name_array.map { |x| x[0].upcase }.join
      else
        name_array[0].upcase
      end
    end

    def random_number
      rand.to_s[2..6]
    end
  end
end