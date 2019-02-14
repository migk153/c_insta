from django.db import models
from c_insta.users import models as user_models
from c_insta.images import models as image_models

# Create your models here.
# Below it is Just an example

# creator = models.ForeignKey(user_models.User, null=True, on_delete=models.CASCADE, related_name='images')

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        # the first place is for the admin panel, the second is for the database

        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='creator')
    to = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, on_delete=models.CASCADE, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)





