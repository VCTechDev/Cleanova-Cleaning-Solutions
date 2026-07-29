from django.db import models

class Hero(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    description = models.TextField()
    button_text = models.CharField(max_length=50)
    button_link = models.CharField(max_length=255)
    image = models.ImageField(upload_to='hero_images/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Statistic(models.Model):
    title = models.CharField(max_length=255)
    value = models.CharField(max_length=50)
    icon = models.CharField(max_length=100, help_text="Icon identifier or SVG content")
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['display_order', 'id']
        verbose_name = 'Statistic'
        verbose_name_plural = 'Statistics'

    def __str__(self):
        return self.title
