import { normalize } from 'path';
const FeedParser = require('feedparser');
const request = require('request'); // for fetching the feed
 
const req = request('. http://www.jeuxvideo.com/rss/rss.xml')
const feedparser = new FeedParser([normalize]);
 
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
  // This is where the action is!
  const stream = this; // `this` is `feedparser`, which is a stream
  const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  const item;
 
  while (item = stream.read()) {
    console.log(item);
  }
});