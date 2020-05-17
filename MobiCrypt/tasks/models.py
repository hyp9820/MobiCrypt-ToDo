from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    # name = models.CharField(max_length=100)
    # email = models.EmailField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    isdone = models.BooleanField(default=False)
    isimp = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="tasks", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
