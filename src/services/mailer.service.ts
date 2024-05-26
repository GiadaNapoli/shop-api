import nodemailer from "nodemailer";

export async function sendMail(newemail: string, name: string) {
	var transport = nodemailer.createTransport({
		host: "sandbox.smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "1e3c2cca73c4f3",
			pass: "8fe0e80090dae3",
		},
	});
	//Add a check to verify if the email was successfully sent.
	const info = await transport.sendMail({
		from: "info@mailtrap.io", // sender address
		to: newemail, // list of receivers
		subject: `Welcome ${name} `, // Subject line
		text: `welocome ${name} We are excited to have you as a member of our community.`, // plain text body
		html: `<b>Welcome aboard, ${name} !</b> We are thrilled to have you join us.`, // Update HTML content
	});

	console.log("Message sent: %s", info.messageId);
}
