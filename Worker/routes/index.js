var express = require('express');
var router = express.Router();
const request = require('request'); 
const FeedParser = require('feedparser');
 
const req = request('http://www.jeuxvideo.com/rss/rss.xml', 'http://www.jeuxvideo.com/rss/rss-news.xml',
'http://www.jeuxvideo.com/rss/itunes-chroniques.xml', 'https://news.google.com/news?ned=fr&num=100&output=rss&q=(%22starwars%22', 'http://www.jeuxvideo.com/rss/rss-videos.xml', 
'http://www.numerama.com/feed/', 'https://news.ycombinator.com/rss' );
const feedparser = new FeedParser();
 
req.on('error', function (error) {
  // handle any request errors
});
 
req.on('response', function (res) {
  const stream = this; // `this` is `req`, which is a stream
 
  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else {
    stream.pipe(feedparser);
  } 
});
 
feedparser.on('error', function (error) {
  // always handle errors
});
 
feedparser.on('readable', function () {
  const stream = this; 
  const meta = this.meta; 
  const item= (item.title, item.description, item.link, item.pubdate, item.guid, item.categories, item.image);
 
  while (item = stream.read()) {
    console.log(item);
  }
});

router.get('/liste', function(req, res, next) {
  request(req, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
});
module.exports = router;
