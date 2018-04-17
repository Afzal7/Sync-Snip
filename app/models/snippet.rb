class Snippet < ApplicationRecord
	belongs_to :user

	validates :name, :content, presence: true
end
