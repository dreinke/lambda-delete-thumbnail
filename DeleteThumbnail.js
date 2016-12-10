var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
  s3.deleteObject({
    Bucket: event.Records[0].s3.bucket.name + '-thumbs',
    Key: decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g,' '))
  }, callback);
};
