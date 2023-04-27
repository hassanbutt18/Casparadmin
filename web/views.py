from django.shortcuts import render

# Create your views here.


def signin(request):
    return render(request, 'web/signin.html')

def signup(request):
    context = {}
    return True

def forgot_password(request):
    return render(request, 'web/forgot_password.html')

def verify_code(request):
    return render(request, 'web/verify_code.html')

def reset_password(request):
    return render(request, 'web/reset_password.html')

def dashboard(request):
    context = {}
    context['active_page'] = 'dashboard'
    return render(request, 'web/dashboard.html', context)

def domain(request):
    context = {}
    context['active_page'] = 'domain'
    return render(request, 'web/domain.html', context)

def notification(request):
    context = {}
    context['active_page'] = 'notification'
    return render(request, 'web/notification.html', context)

def register_user(request):
    context = {}
    context['active_page'] = 'register_user'
    return render(request, 'web/register_user.html', context)

def waiting_registration(request):
    context = {}
    context['active_page'] = 'waiting_registration'
    return render(request, 'web/waiting_registration.html', context)

def add_info(request):
    context = {}
    context['active_page'] = 'add_info'
    return render(request, 'web/add_info.html', context)

def blocked_user(request):
    context = {}
    context['active_page'] = 'blocked_user'
    return render(request, 'web/blocked_user.html', context)

def reported_user(request):
    context = {}
    context['active_page'] = 'reported_user'
    return render(request, 'web/reported_user.html', context)

def active_capsule(request):
    context = {}
    context['active_page'] = 'active_capsule'
    return render(request, 'web/active_capsule.html', context)

def waiting_list(request):
    context = {}
    context['active_page'] = 'waiting_list'
    return render(request, 'web/waiting_list.html', context)

def profile_setting(request):
    context = {}
    context['active_page'] = 'profile'
    return render(request, 'web/profile_setting.html', context)