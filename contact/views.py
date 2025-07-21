from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

# Create your views here.
def contact(request):
    success_message = None
    form = ContactForm()
    
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            message = form.cleaned_data["message"]
            
            subject = f"Message from {name} ({email})"
            body = f"Sender name: {name}\nSender email: {email}\nSender messages: {message}"
            
            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL],
                fail_silently=False,
            )
            
            success_message = f"Thank you, {name}. Your message has been sent!"
            form = ContactForm() # Clear the form after submission
    
    return render(request, "contact/index.html", {"form": form, "success_message": success_message})
