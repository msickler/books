class TitleSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :rank, :episodes, :categories, :season
end
