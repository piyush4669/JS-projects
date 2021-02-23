import pydoubleteam as pyt
import sys

userInputWordLimit = 150

text = """
This memo is intended to remind all host personnel that at 0800 EST on
March 21, 1984  every host on  the MILNET/ARPANET will  acquire a  new
official host name in accordance with RFC 897, the "Domain Name System
Implementation Schedule".  Briefly, all  existing official names  will
become nicknames, and the new official  name will be formed by  adding
the domain name ".ARPA" to  the old official name.  Special  attention
should be paid to  the possible problems that  your site software  may
encounter with the new names.

For example, the old entry for USC-ISIF is:

   HOST : 10.2.0.52 : USC-ISIF,ISIF : DEC-1090T : TOPS20 :
   TCP/TELNET,TCP/SMTP,TCP/FTP,TCP/FINGER,UDP/TFTP :

The new entry will be:

   HOST : 10.2.0.52 : USC-ISIF.ARPA,USC-ISIF,ISIF : DEC-1090T : TOPS20
   : TCP/TELNET,TCP/SMTP,TCP/FTP,TCP/FINGER,UDP/TFTP :

For some hosts and  programs this will cause  no disruptions, but  for
others some problems may arise.   For example, with over five  hundred
entries in the table, the addition of 500 names could exceed the space
allocated to  store  the table  in  some programs.   Another  possible
problem is that period (or dot, ".")  is not now a legal character  in
host names,  and some  programs may  not be  able to  parse these  new
names.
"""

phrase,word=pyt.top_keywords_sentences(text,phrase_limit=15,sent_word_limit=userInputWordLimit)

print('Phrase:',phrase)
print('Keywords:',word)
