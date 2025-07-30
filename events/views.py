from django.shortcuts import render
from django.conf import settings
from .models import Event
from django.utils import timezone


# Create your views here.
def events(request):
    events = Event.objects.all().order_by("date")

    # Annotate each event with a temporary attribute (not saved to DB)
    now = timezone.now().date()
    for event in events:
        event.is_past = event.date < now

    return render(request, "events/index.html", {"events": events, "ENVIRONMENT": settings.ENVIRONMENT})


def event_detail(request, id=0):
    events = Event.objects.all()
    event = list(filter(lambda x: x.id == id, events))[0]

    now = timezone.now().date()
    event.is_past = event.date < now

    return render(request, "events/event_detail.html", {"id": id, "event": event})
