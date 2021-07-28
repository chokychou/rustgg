from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview" ),
    path('purchase-history/', views.puchaseHistory, name="purchase-history" ),
    path('update-new-purchase/', views.updateNewPurchase, name="update-new-purchase" ),
]
