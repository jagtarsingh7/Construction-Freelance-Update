const {initializeApp} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
const {onRequest} = require('firebase-functions/v2/https');
const cors = require('cors')({origin: true});

initializeApp();
exports.sendMessage = onRequest(async (req:any, res:any) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const phone = process.env.TWILIO_PHONE;
    const clientPhone=process.env.CLIENT_PHONE;
    const client = require('twilio')(accountSid, authToken);

    cors(req, res, async () => {
      const data = req.body;
      const writeResult = await getFirestore()
        .collection('messages')
        .add({original: data});
      client.messages
        .create({
          body: `${data.Name}, ${data.Email}: ${data.ProjectDetails}`,
          from: `${phone}`,
          to: clientPhone,
        })
        .then((message:any) => {
          res.json({
            result: `Message with ID: ${writeResult.id} added.`,
            message: message.status,
          });
        })
        .catch((error:any) => {
          res.status(500).json({error: 'Internal Server Error'});
        });
    });
  } catch (error) {
    const errorMessage = 'Invalid data';
    res.status(400).json({error: errorMessage});
  }
});
