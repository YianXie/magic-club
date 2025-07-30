from django.db import models
from django.conf import settings


# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    picture = models.ImageField(upload_to="uploads/", blank=True)
    description = models.TextField(max_length=1000, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title

    @property
    def picture_url(self):
        if self.picture and self.picture.name:
            try:
                if self.picture.storage.exists(self.picture.name):
                    return self.picture.url
            except NotImplementedError:
                # Some storage backend doesn't support `exists`
                return self.picture.url
            
            return f"https://res.cloudinary.com/{settings.CLOUDINARY_USERNAME}/image/upload/{self.picture.name}"
        
        return "/static/images/default-image.jpg"