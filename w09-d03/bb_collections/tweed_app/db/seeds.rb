15.times do 
  Tweed.create({
    content: FFaker::HipsterIpsum.phrase,
    author: FFaker::Internet.user_name,
  })
end