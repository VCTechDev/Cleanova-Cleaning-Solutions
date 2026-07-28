from rest_framework import serializers
from .models import Hero

class HeroSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Hero
        fields = (
            "title",
            "subtitle",
            "description",
            "button_text",
            "button_link",
            "image",
        )

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None
