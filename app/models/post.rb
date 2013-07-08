class Post < ActiveRecord::Base
  attr_accessible :text, :title
  has_many :comments

  def as_json(options={})
    { :id => self.id, :title => self.title, :text => self.text, :comment_ids =>self.comments.collect{|comment| comment.id} }
  end

end
