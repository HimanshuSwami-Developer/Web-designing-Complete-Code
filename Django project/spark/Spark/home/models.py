from pyclbr import Class
from django.db import models

# Create your models here.

class Contact(models.Model): 
    Email = models.CharField( max_length=50)
    Passward =models.CharField( max_length=10)
    Adress1=models.CharField( max_length=80)
    Adress2=models.CharField(max_length=60)
    City=models.CharField( max_length=50)
    State=models.CharField( max_length=50)
    Pin=models.CharField( max_length=7)
    date=models.DateField()

    def __str__(self):
        return self.Email
