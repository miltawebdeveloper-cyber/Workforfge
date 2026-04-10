import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message, tier } = body;

    // Simulate database insertion or email sending
    console.log('--- NEW BOOKING/CONTACT INQUIRY ---');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Inquiry:', message);
    console.log('Selected Tier:', tier || 'N/A');
    console.log('-----------------------------------');


    // CONFIGURATION: Set your receiver email here
    const RECEIVER_EMAIL = 'miltawebdeveloper@gmail.com';

    // Actual Brevo API Call
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 
        'api-key': process.env.BREVO_API_KEY || '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: "Workforge", email: RECEIVER_EMAIL }, // Use verified email
        to: [{ email: RECEIVER_EMAIL }],
        subject: `Workforge Inquiry from ${name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2159dc;">New Workforge Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-left: 4px solid #2159dc;">
              ${message}
            </div>
          </div>
        `
      })
    });

    const brevoData = await brevoResponse.json();
    console.log('Brevo Status:', brevoResponse.status);
    console.log('Brevo Response Body:', brevoData);

    if (!brevoResponse.ok) {
      throw new Error(brevoData.message || 'Brevo API failed');
    }
    return NextResponse.json(
      { message: 'Inquiry received. Our concierge will contact you shortly.', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.', success: false },
      { status: 500 }
    );
  }
}
