from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from .forms import ContactForm


# Create your views here.
def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            message = form.cleaned_data["message"]

            # Generate the subject and the body based on the user's input
            subject = f"Message from {'an anonymous user' if name == '' else name}{'' if email == '' else f'({email})'}"
            body = ('' if name == '' else (f'Sender name: {name}\r\n')) + ('' if email == '' else (f'Sender email: {email}\r\n')) + f"Sender messages: {message}"

            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL],
                fail_silently=False,
            )

            # Add success message using Django's messages framework
            messages.success(request, f"Thank you, {name}. Your message has been sent!")

            # Redirect to prevent form resubmission on page refresh
            return redirect("contact")
    else:
        form = ContactForm()

    return render(request, "contact/index.html", {"form": form})
