class SnippetSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :updated_at
end
