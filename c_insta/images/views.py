# from django.shortcuts import render       We use render when we want to use templates.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


# Create your views here.

class Feed(APIView):

    def get(self, request, format=True):

        user = request.user

        following_users = user.following.all()

        image_list = []

        for following_user in following_users:

            user_images = following_user.images.all()[:2]

            for image in user_images:

                image_list.append(image)

        sorted_list = sorted(image_list, key=lambda x: x.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, many=True)        

        return Response(data=serializer.data)


class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        user = request.user

        try:
            found_image = models.Image.objects.get(id=image_id)

        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisting_like = models.Like.objects.get(
                creator=user,
                image=found_image
            )
            preexisting_like.delete()

            return Response(status=HTTP_204_NO_CONTENT)

        except models.Like.DoesNotExist:
            models.Like.objects.create(
                creator=user,
                image=found_image
            )

        return Response(status=status.HTTP_201_CREATED)
