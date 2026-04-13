import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required." }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["srr0607378@gmail.com"],
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0d1224; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #16f2b3; border-bottom: 1px solid #ffffff20; padding-bottom: 10px;">📬 New Portfolio Contact</h2>
          <p><strong style="color: #ec4899;">Name:</strong> ${name}</p>
          <p><strong style="color: #ec4899;">Email:</strong> <a href="mailto:${email}" style="color: #16f2b3;">${email}</a></p>
          <p><strong style="color: #ec4899;">Message:</strong></p>
          <div style="background: #ffffff10; padding: 16px; border-radius: 8px; border-left: 3px solid #7c3aed;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="color: #ffffff60; font-size: 12px; margin-top: 20px;">Sent from raunakshahu.netlify.app</p>
        </div>
      `,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data.id }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email. Please try again." }),
    };
  }
};
