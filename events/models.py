from django.db import models


# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    picture = models.ImageField(upload_to="uploads/", blank=True)
    description = models.TextField(max_length=1000, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title
