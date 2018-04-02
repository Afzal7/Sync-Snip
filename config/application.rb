require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SyncrowRails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    config.secret_key_base = '4f64aea9ecb58305ce2c4eea6a2cf410235e6ba4644bc6299d45fdaa8fc7570fed9def59fe241e65ca010b64fdda9c8e4ca4871288f9d6d7471955b13f87d1c2'
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
