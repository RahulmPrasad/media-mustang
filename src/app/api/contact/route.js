// Stand-in for the template's mailer.php. Validates the contact form and
// replies with a plain-text message; hook up an email provider here to
// actually deliver the message.
export async function POST(request) {
  const data = await request.formData();
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return new Response("Please complete the form and try again.", { status: 400 });
  }

  console.log("Contact form submission:", { name, email, message });
  return new Response("Thank You! Your message has been sent.");
}
