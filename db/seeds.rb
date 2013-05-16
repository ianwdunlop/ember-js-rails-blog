# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)
  post = Post.create( :title => 'First post', :content => 'Text for first post' )
  Comment.create(:text => 'Post one comment one', :post_id => post.id)
  Comment.create(:text => 'Post one comment two', :post_id => post.id)
  post = Post.create( :title => 'Second post',  :content => 'Text for second post' )
  Comment.create(:text => 'Post two comment one', :post_id => post.id)
  Comment.create(:text => 'Post two comment two', :post_id => post.id)
  post = Post.create( :title => 'Third post', :content => 'Text for third post' )
  Comment.create(:text => 'Post three comment one', :post_id => post.id)
  Comment.create(:text => 'Post three comment two', :post_id => post.id)

