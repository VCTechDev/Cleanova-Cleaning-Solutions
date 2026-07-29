from django.contrib import admin
from .models import Hero, Statistic

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

@admin.register(Statistic)
class StatisticAdmin(admin.ModelAdmin):
    list_display = ('title', 'value', 'icon', 'display_order', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title', 'value')
    list_editable = ('display_order', 'is_active')
