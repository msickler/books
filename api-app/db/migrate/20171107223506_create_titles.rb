class CreateTitles < ActiveRecord::Migration[5.1]
  def change
    create_table :titles do |t|
      t.string :name
      t.text :summary
      t.integer :rank
      t.string :episodes
      t.string :categories
      t.string :season
    end
  end
end
