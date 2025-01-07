import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["POST"])
def send_email():
    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    # Email configuration
    sender_email = "your_email@example.com"
    sender_password = "your_password"
    receiver_email = "your_email@example.com"

    # Email content
    subject = f"Contact Form Submission from {name}"
    body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connect to the SMTP server and send the email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)

        return "Message sent successfully!"
    except Exception as e:
        return f"An error occurred: {e}"

if __name__ == "__main__":
    app.run(debug=True)
