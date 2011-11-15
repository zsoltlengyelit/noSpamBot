<h1>noSpamBot</h1>
<p>
This tiny jQuery plugin provides comfortable way to show e-mail addresses in pages.
Don't worry about sapambots. Won't find these addresses.
</p>

<h1>Use</h1>
<p>
  The conventional use, add this tag to HEAD:
  <pre>
&lt;script type="text/javascript" src="https://raw.github.com/zsoltlengyelit/noSpamBot/master/jquery.noSpamBot.js"&gt;&lt;/script&gt; 
</pre>
Then somewhere in the page, or another script file:
<pre>
&lt;span class="email" email="john{at}site{dot}com"&gt;&lt;/span&gt;
</pre>
<pre>
$(function(){
    $('.email').noSpamBot();
});
</pre>
</p>
<h1>Demo</h1>
<http://jsfiddle.net/pzv8g/42/embedded/result/>
