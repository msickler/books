class AddLikesToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :likes, :integer
  end
end
