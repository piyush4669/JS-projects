from django.shortcuts import render
from .forms import summary_content
from . import pydoubleteam as pyt
# Create your views here.
def index_view(request):
    form = summary_content()
    context={ 'form': form }
    if request.method == "POST":
        form = summary_content(request.POST)
        if form.is_valid():
            text = form.cleaned_data['text']
            userInputWordLimit=150
            phrase, word=pyt.top_keywords_sentences(text,phrase_limit=15,sent_word_limit=userInputWordLimit)
            form = summary_content()
            context={ 'form': form, 'phrase': phrase, 'word': word }
            return render(request, "index.html", context)
    return render(request, "index.html", context)
