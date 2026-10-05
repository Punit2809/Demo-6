const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        const result = await resend.emails.send({
            from: "Website <onboarding@resend.dev>",
            to: ["your@email.com"],
            subject: `New Contact Form Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully.",
            data: result
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Unable to send email."
        });
    }
};