import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, origins="*")  # This enables CORS for all routes

@app.route("/")
def home():
    return "Welcome to the Helpdesk System!"

@app.route("/send_ticket", methods=["POST"])
def send_email():
    # Retrieve JSON data from the request
    data = request.get_json()

    # Retrieve form data
    name = data.get("name")
    email = data.get("email")
    issue = data.get("message")
    password = data.get("password")

    # Validate data
    if not name or not email or not issue or not password:
        return jsonify({"error": "All fields are required."}), 400

    # Prepare the email content (remove password from the body)
    subject = f"New Helpdesk Ticket from {name}"
    body = f"User: {name}\nEmail: {email}\nIssue: {issue}"

    msg = MIMEMultipart()
    msg["From"] = email
    msg["To"] = "mohdabdulrafi17@gmail.com"  # Hardcoded developer's email address
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connect to the SMTP server and send the email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(email, password)  # Log in using sender's email and app password
            server.sendmail(email, "mohdabdulrafi17@gmail.com", msg.as_string())  # Send email to developer's email
        return jsonify({"message": "Ticket has been emailed to the developer!"}), 200
    except smtplib.SMTPAuthenticationError:
        return jsonify({"error": "Authentication failed. Please check your email and password."}), 401
    except smtplib.SMTPException as e:
        return jsonify({"error": f"SMTP error occurred: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

def log_ticket(name, email, issue):
    """Logs ticket details to ticket.txt"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"Timestamp: {timestamp}\nName: {name}\nEmail: {email}\nIssue: {issue}\n{'-'*40}\n"
    try:
        with open("ticket.txt", "a") as file:  # Open the file in append mode
            file.write(log_entry)
    except Exception as e:
        print(f"Error logging ticket: {e}")

if __name__ == "__main__":
    app.run(debug=True)
