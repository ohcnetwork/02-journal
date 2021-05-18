# frozen_string_literal: true

namespace :api, defaults: { format: :json }  do
  namespace :oxygen do
    resources :sessions, only: [:create]
    namespace :admin do
      get "cylinder_search", to: "cylinder_search#search"

      resources :vendors do
        resources :cylinders do
          collection do
            post :add
          end
        end
      end
    end
  end

  namespace :v1 do
    resources :users do
      member do
        post :verify_otp
      end
    end
    resources :merchants, only: [:create] do
      member do
        post :verify_otp
      end
    end
    resources :local_bodies, only: [:index]
    resources :qr_codes, only: [:show]

    resources :visits, only: [:create, :index] do
      member do
        put :exit
      end
      collection do
        get :ongoing
      end
    end

    namespace :admin do
      resources :sessions, only: [:create]
      resources :visits, only: [:index]
      resources :users, only: [:index] do
        member do
          get :route_map
        end
      end
      resources :merchants, only: [:index]
    end
  end
end
