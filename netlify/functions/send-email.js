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
    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    const htmlContent = `
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
    `;

    if (!BREVO_API_KEY) {
      console.error("No BREVO_API_KEY configured.");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Email provider not configured." }),
      };
    }

    const brevoPayload = {
      sender: { name: "Portfolio Contact", email: "no-reply@raunakshahu.net" },
      to: [{ email: "srr0607378@gmail.com", name: "Raunak Shahu" }],
      subject: `New message from ${name} — Portfolio`,
      htmlContent: htmlContent,
      replyTo: { email },
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(brevoPayload),
    });

    const resJson = await res.json();

    if (!res.ok) {
      console.error("Brevo error:", resJson);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: resJson }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: resJson.messageId || resJson.messageId }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email. Please try again." }),
    };
  }
};
