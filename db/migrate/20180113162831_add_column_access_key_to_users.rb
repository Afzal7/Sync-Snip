class AddColumnAccessKeyToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :access_key, :text
  end
end
