import { ContactFormState } from '../types';

export const sendEmail = async (data: ContactFormState): Promise<boolean> => {
  // Call the Sullivan's Excavating Vercel Serverless Function middleware
  const endpoint = import.meta.env.VITE_VERCEL_API_URL || '/api/contact';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      return true;
    } else {
      let errData;
      try {
        errData = await res.json();
      } catch (e) {
        errData = res.statusText;
      }
      console.error('Serverless Function Error:', errData);
      throw new Error('Failed to send email via serverless function.');
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};
