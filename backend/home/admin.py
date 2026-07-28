from django.contrib import admin
from .models import Hero

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "subtitle",
        "description",
        "button_text",
        "button_link",
        "image",
    )
    list_filter = ('is_active',)
    search_fields = ('title', 'subtitle')
