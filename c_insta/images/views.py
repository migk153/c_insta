# from django.shortcuts import render       We use render when we want to use templates.
from rest_framework.views import APIView
from rest_framework.response import Response
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

        print(image_list)

        return Response(status=200)
