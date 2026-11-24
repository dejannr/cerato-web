import smtplib
from email.message import EmailMessage

from fastapi import HTTPException

from app.config import settings


def send_customer_email(recipient: str, subject: str, body: str) -> None:
    if not settings.smtp_host:
        raise HTTPException(status_code=503, detail="Customer email is not available because Cerato's SMTP settings are not configured yet.")

    message = EmailMessage()
    message["From"] = f"Cerato Systems <{settings.smtp_from}>"
    message["To"] = recipient
    message["Subject"] = subject
    message.set_content(body)

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            if settings.smtp_username:
                server.login(settings.smtp_username, settings.smtp_password or "")
            server.send_message(message)
    except (OSError, smtplib.SMTPException) as error:
        raise HTTPException(status_code=502, detail="Cerato's SMTP server could not send the customer email. The request is still saved.") from error
