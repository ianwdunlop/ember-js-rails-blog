class ChangeContentToTextInPost < ActiveRecord::Migration
  def up
    change_table :posts do |t|
      t.rename :content, :text
    end
  end

  def down
    change_table :posts do |t|
      t.rename :text, :content
    end
  end
end
