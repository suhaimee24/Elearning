Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV['WHITELIST'].split(',')
    resource '*', headers: :any, methods: %i[get post patch put delete], credentials: true
  end
end