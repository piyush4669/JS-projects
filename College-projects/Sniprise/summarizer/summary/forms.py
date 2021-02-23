from django import forms

class summary_content(forms.Form):
    text = forms.CharField(widget=forms.Textarea(attrs={
                 'class':'materialize-textarea',
                 'placeholder': 'Enter your text here.',
                 'required': True,
                 'id': 'text'
            }))
