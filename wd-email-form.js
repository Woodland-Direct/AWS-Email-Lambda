var AWS = require('aws-sdk')
var ses = new AWS.SES()

// Exports sendEmail functions which sends form information
exports.sendEmail = (e, ctx) => {
  // to make sure the payload is captured in logging if there are failures
  console.log('Payload: ' + JSON.stringify(e))
  // Create email parameters
  var params = {
    Destination: {
      ToAddresses: ['jeremy.kline@woodlanddirect.com', 'marty.dorda@woodlanddirect.com', 'ryan.brady@woodlanddirect.com', 'ken.colley@woodlanddirect.com']
    },
    Message: {
      Body: {
        Text: {
          Data: e.email_body,
          Charset: 'UTF-8'
        }
      },
      Subject: {
        Data: e.email_subject,
        Charset: 'UTF-8'
      }
    },
    Source: 'stefan.holodnick@woodlanddirect.com',
    ReplyToAddresses: [
      e.sender_name + '<stefan.holodnick@woodlanddirect.com>'
    ]
  }

  // Send the email
  ses.sendEmail(params, function (err, data) {
    if (err) {
      ctx.fail(err)
    } else {
      ctx.succeed(data)
    }
  })
}
