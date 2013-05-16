class Post < ActiveRecord::Base
  attr_accessible :content, :title
  has_many :comments

  def as_json(options={})
    { :id => self.id, :title => self.title, :content => self.content, :comment_ids =>self.comments.collect{|comment| comment.id} }
  end

end
