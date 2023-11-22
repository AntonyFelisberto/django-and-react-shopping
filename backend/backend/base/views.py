from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .products import products
from .Serializers import ProductSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        token = super().validate(self.user)

        refresh = self.get_token(self.user)

        token['refresh'] = str(refresh)
        token['acess'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            updata_last_login(None, self.user)

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
def get_routes(request):
    routes = [
        "/api/products/",
        "/api/products/create/",
        
        "/api/products/upload/",
        
        "/api/products/<id>/reviews/",
        
        "/api/products/top/",
        "/api/products/<id>/",

        "/api/products/delete/<id>/",
        "/api/products/<update>/<id>/",
    ]
    return Response(routes)

@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def get_product(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many=True)
    return Response(serializer.data)