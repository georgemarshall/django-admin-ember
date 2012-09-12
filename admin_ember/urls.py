from django.conf.urls import patterns, include, url

from admin_ember import views

urlpatterns = patterns('',
    url(r'^$', views.Dashboard.as_view(), name='index'),
)
