from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(
        label="Your name",
        max_length=50,
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "e.g. Will Smith (optional)", "autofocus": True}),
    )
    email = forms.EmailField(
        label="Your Email",
        max_length=100,
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "e.g. will.smith@gmail.com (optional)"}),
    )
    message = forms.CharField(
        label="Your Message",
        max_length=1000,
        widget=forms.Textarea(attrs={"placeholder": "e.g. I think you can improve on ..."}),
    )
