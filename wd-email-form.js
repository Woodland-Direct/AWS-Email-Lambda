var AWS = require('aws-sdk')
var ses = new AWS.SES()

// Exports sendEmail functions which sends form information
exports.sendEmail = (e, ctx) => {
  var email = {
    "Andrew Dering": "andrew.dering@woodlanddirect.com",
    "Andrew Kern": "andrew.kern@woodlanddirect.com",
    "Barry Blake": "barry.blake@woodlanddirect.com",
    "Ben Morris": "ben@woodlanddirect.com",
    "Bill Hylton": "bill.hylton@woodlanddirect.com",
    "Brett Decker": "Brett.Decker@WoodlandDirect.com",
    "Brett Lundin": "Brett.Lundin@WoodlandDirect.com",
    "Christian Vanover": "christian.vanover@woodlanddirect.com",
    "Chuck Nitschke": "chuck.nitschke@woodlanddirect.com",
    "Daniel Lombardo": "daniel.lombardo@woodlanddirect.com",
    "Danny Landon": "danny.landon@woodlanddirect.com",
    "Derrick Barnes": "derrick.barnes@woodlanddirect.com",
    "Devin Inbody": "devin.inbody@woodlanddirect.com",
    "Donavon Rigel": "donavon.rigel@woodlanddirect.com",
    "Garrett Jamieson": "garrett.jamieson@woodlanddirect.com",
    "James Doto": "James.Doto@WoodlandDirect.com",
    "Jason Hurley": "jason.hurley@woodlanddirect.com",
    "Jeff O'Keefe": "jeff.okeefe@woodlanddirect.com",
    "Jeremiah Bouchard": "jeremiah.bouchard@woodlanddirect.com",
    "Josh Leake": "josh.leake@woodlanddirect.com",
    "Ken Colley": "ken.colley@woodlanddirect.com",
    "Kevin Pottenger": "kevin.pottenger@woodlanddirect.com",
    "Lynden Nugteren": "lynden.nugteren@woodlanddirect.com",
    "Mark Matis": "Mark.Matis@woodlanddirect.com",
    "Matthew Murray": "matthew.murray@woodlanddirect.com",
    "Mike Jergens": "mike.jergens@woodlanddirect.com",
    "Nathan Roethe": "nathan.roethe@woodlanddirect.com",
    "Nicholas Hodge": "nick.hodge@woodlanddirect.com",
    "Nick Carrier": "nick.carrier@woodlanddirect.com",
    "Nick Janco": "nick.janco@woodlanddirect.com",
    "Randy Mowry": "randy.mowry@woodlanddirect.com",
    "Rogers Trotter": "rogers.trotter@woodlanddirect.com",
    "Ryan Brady": "ryan@woodlanddirect.com",
    "Seth Kester": "seth.kester@woodlanddirect.com",
    "Thomas Kearney": "thomas.kearney@woodlanddirect.com",
    "default": "marty.dorda@woodlanddirect.com"
    //"default": "stefan.holodnick@woodlanddirect.com",    
    //"Stefan Holodnick": "stefan.holodnick@woodlanddirect.com"
  }

  var receiverEmail = (e.receiver_name) ? email[e.receiver_name] : e.receiver_email_address

  // Create email parameters
  var params = {
    Destination: {
      ToAddresses: [
        receiverEmail
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