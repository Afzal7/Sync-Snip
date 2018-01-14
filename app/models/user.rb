class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :snippets, dependent: :destroy

  accepts_nested_attributes_for :snippets, allow_destroy: true

  before_create :generate_access_key

  def generate_access_key
  	self.access_key = loop do
      random_token = SecureRandom.urlsafe_base64(200, false)
      break random_token unless User.exists?(access_key: random_token)
    end
  end
end
