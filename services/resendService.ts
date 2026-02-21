import { ContactFormState } from '../types';

export const sendEmail = async (data: ContactFormState): Promise<boolean> => {
  // In a real production app, you should proxy this request through your own backend
  // to avoid exposing your API Key to the client.
  // However, for this demonstration or internal tools, we simulate the structure.
  
  const apiKey = data.apiKey || process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("No Resend API Key provided. Simulating success.");
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    return true; 
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Default testing sender for Resend
        to: 'delivered@resend.dev', // Default testing receiver
        subject: `New Contact from ${data.name}`,
        html: `
          <h1>New Contact Request</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      })
    });

    if (res.ok) {
      return true;
    } else {
      const errData = await res.json();
      console.error('Resend Error:', errData);
      throw new Error('Failed to send email via Resend.');
    }
  } catch (error) {
    console.error('Email service error:', error);
    // If it fails (likely due to CORS if run purely client-side without proxy), 
    // we throw to let the UI handle the error state.
    throw error;
  }
};
