from rest_framework import serializers
from .models import Hero, Statistic, Video

class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = ('id', 'title', 'value', 'icon', 'display_order')

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

class VideoSerializer(serializers.ModelSerializer):
    video_file = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ('id', 'title', 'language', 'video_file', 'display_order', 'is_active', 'created_at')

    def get_video_file(self, obj):
        request = self.context.get('request')
        if obj.video_file:
            if request:
                return request.build_absolute_uri(obj.video_file.url)
            return obj.video_file.url
        return None

        return None
