from datetime import datetime
from django.shortcuts import render,HttpResponse
from home.models import Contact
from django.contrib import messages

# Create your views here.
def index(request):
      text={
            'a':"this is sent",
            'b':"hello there"
      }
      messages.success(request, ' testing message')
      return render(request,"index.html",text)
      # return HttpResponse ("this is web")

def about(request):
      return render(request,'about.html')
      # return HttpResponse ("this is about")

def service(request):
      return render(request,'service.html')
   
      #  return HttpResponse ("this is services")

def contact(request):
      if request.method=='POST':
            Email=request.POST.get('Email')
            Passward=request.POST.get('Passward')
            Adress1=request.POST.get('Adress1')
            Adress2=request.POST.get('Adress2')
            City=request.POST.get('City')
            State=request.POST.get('State')
            Pin=request.POST.get('Pin')
            
            contact=Contact(Email=Email,Passward=Passward,Adress1=Adress1,Adress2=Adress2,City=City,State=State,Pin=Pin,date=datetime.today())
            contact.save()
            messages.success(request, 'Your Details are Stored')
      return render(request,'contact.html')
   
      #  return HttpResponse ("this is contact")
