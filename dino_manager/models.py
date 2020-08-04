from django.db import models


class Dinosaur(models.Model):
    name = models.TextField(max_length=255)
    height_in_m = models.IntegerField()
    is_carnivore = models.BooleanField()

