var AWS = require('aws-sdk')
var ses = new AWS.SES()

// Exports sendEmail functions which sends form information
exports.sendEmail = (e, ctx) => {
  // Create email parameters
  var params = {
    Destination: {
      ToAddresses: [
        e.receiver_email_address
      ]
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
    Source: e.sender_email_address,
    ReplyToAddresses: [
      e.sender_name + '<' + e.sender_email_address + '>'
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