class AddUserToPosts < ActiveRecord::Migration
  def change
    #String for now, maybe a model later
    add_column :posts, :user, :string
  end
end
