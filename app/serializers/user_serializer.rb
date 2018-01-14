class UserSerializer < ActiveModel::Serializer
  attributes :id, :access_key
  has_many :snippets
end
