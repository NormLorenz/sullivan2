TODO: Add a new link for owner prerequistics (site prep) before construction begins.

TODO: Figure out the public/assets folder.

TODO: Play with secrets.

https://sullivan-s-excavating-1028673508634.us-west1.run.app

https://sullivan-s-excavating-1028673508634.us-west1.run.app

### How can a Google AI Studio application send email through a Gmail account. Please respond in markdown and code in node.js?

To send an email from a Google AI Studio application using Node.js, you must integrate the Google Generative AI SDK (to generate content) with the Gmail API (to send the message). 
1. Prerequisites
- Gemini API Key: Obtain from Google AI Studio.
- Gmail API Credentials:
- Enable the Gmail API in the Google Cloud Console.
- Set up the OAuth consent screen and add the scope https://www.googleapis.com/auth/gmail.send.
- Create an OAuth 2.0 Client ID (Desktop app) and download the credentials.json file. 

 2. Install Dependencies 

 ```bash
 npm install @google/generative-ai googleapis
 ```

 3. Node.js Implementation
This script uses Gemini to write an email and the Gmail API to send it. 

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { google } = require("googleapis");
const fs = require("fs").promises;

// 1. Initialize Gemini
const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function sendAiEmail() {
  try {
    // 2. Generate Email Content
    const prompt = "Write a short professional thank-you email for a job interview.";
    const result = await model.generateContent(prompt);
    const emailBody = result.response.text();

    // 3. Setup Gmail API Auth (Requires pre-authorized token.json)
    // See Google's Node.js Quickstart to generate this token: 
    // https://developers.google.com/workspace/gmail/api/quickstart/nodejs
```

```javascript
    const content = await fs.readFile('credentials.json');
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    
    const token = await fs.readFile('token.json');
    oAuth2Client.setCredentials(JSON.parse(token));

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // 4. Construct and Encode Email
    const subject = "Thank You - Interview Follow Up";
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
    const messageParts = [
      'From: "Your Name" <your-email@gmail.com>',
      'To: recipient@example.com',
      'Content-Type: text/plain; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${utf8Subject}`,
      '',
      emailBody,
    ];
    const message = messageParts.join('\n');

    // The Gmail API requires base64url encoding
    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // 5. Send Email
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('Email sent!', res.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendAiEmail();
```

Key Considerations
- Token Management: The initial run of a Gmail API script requires a one-time OAuth authorization to create a token.json file.
- Rate Limits: Gmail has a daily sending limit of 2,000 messages (or 500 for trial accounts).
- Encoding: The message must be converted to a base64url encoded string before sending. 


