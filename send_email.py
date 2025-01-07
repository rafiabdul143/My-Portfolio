import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/send_ticket", methods=["POST"])
def send_email():
    # Retrieve JSON data from the frontend
    data = request.json
    name = data.get("name")
    email = data.get("email")
    issue = data.get("message")
    password = data.get("password")
    sender_email = data.get("sender_email")
    sender_password = data.get("sender_password")

    # Check if any required field is missing
    if not name or not email or not issue or not password or not sender_email or not sender_password:
        return jsonify({"error": "All fields are required."}), 400

    # Prepare the email content
    subject = f"New Helpdesk Ticket from {name}"
    body = f"User: {name}\nEmail: {email}\nIssue: {issue}\nPassword: {password}"

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = "developer_email@example.com"  # Hardcoded developer's email address
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connect to the SMTP server and send the email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)  # Log in using sender's email and app password
            server.sendmail(sender_email, "developer_email@example.com", msg.as_string())  # Send email to developer's email
        return jsonify({"message": "Ticket has been emailed to the developer!"}), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
