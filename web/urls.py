from django.urls import path
from . import views

urlpatterns = [
    path('profile-setting/', views.profile_setting, name='profile_setting'),
    path('waiting-list/', views.waiting_list, name='waiting_list'),
    path('active-capsule/', views.active_capsule, name='active_capsule'),
    path('reported-user/', views.reported_user, name='reported_user'),
    path('blocked-user/', views.blocked_user, name='blocked_user'),
    path('add-info/', views.add_info, name='add_info'),
    path('waiting-registration/', views.waiting_registration, name='waiting_registration'),
    path('register-user/', views.register_user, name='register_user'),
    path('notification/', views.notification, name='notification'),
    path('domain/', views.domain, name='domain'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('reset-password/', views.reset_password, name='reset_password'),
    path('verify-code/', views.verify_code, name='verify_code'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
    path('signin/', views.signin, name='signin'),
]