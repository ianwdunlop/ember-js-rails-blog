class Post < ActiveRecord::Base
  attr_accessible :text, :title, :user
  has_many :comments

  def as_json(options={})
    { :id => self.id, :title => self.title, :text => self.text, :user => self.user, :created_at => self.created_at, :updated_at => self.updated_at, :comment_ids =>self.comments.collect{|comment| comment.id} }
  end

end
