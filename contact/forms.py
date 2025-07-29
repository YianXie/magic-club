from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(
        label="Your name",
        max_length=50,
        widget=forms.TextInput(attrs={"placeholder": "Your name", "autofocus": True}),
    )
    email = forms.EmailField(
        label="Your Email",
        max_length=100,
        widget=forms.TextInput(attrs={"placeholder": "Your email*"}),
    )
    message = forms.CharField(
        label="Your Message",
        max_length=1000,
        widget=forms.Textarea(attrs={"placeholder": "What's on your mind?*"}),
    )
