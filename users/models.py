from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.

class Users(AbstractBaseUser):
    email = models.EmailField(unique=True, null=False, blank=False)
    first_name = models.CharField(max_length=50, null=False, blank=False)
    last_name = models.CharField(max_length=50, null=False, blank=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    image = models.ImageField(upload_to='profiles/', null=True, blank=True)
    dob = models.DateField(null=False, blank=False)