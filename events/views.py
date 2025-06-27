from django.shortcuts import render
from .models import Event
from django.utils import timezone


# Create your views here.
def events(request):
    events = Event.objects.all().order_by("date")

    # Annotate each event with a temporary attribute (not saved to DB)
    now = timezone.now().date()
    for event in events:
        event.is_past = (
            event.date.date() < now
        )  # or just event.date if it's already a date

    return render(request, "events/index.html", {"events": events})
