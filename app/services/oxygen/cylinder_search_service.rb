# frozen_string_literal: true

module Oxygen
  class CylinderSearchService
    def initialize(search_params)
      @s = search_params
    end

    def search
      results = Cylinder.all

      if @s[:capacity].present?
        results = results.where(capacity: @s[:capacity])
      end

      if @s[:category].present?
        results = results.where(category: @s[:category])
      end

      if @s[:status].present?
        results = results.where(status: @s[:status])
      end

      if @s[:vendor_id].present?
        results = results.where(vendor_id: @s[:vendor_id])
      end

      if @s[:serial_number].present?
        results = results.where("serial_number like ?", "%#{@s[:serial_number]}%")
      end

      results
    end
  end
end