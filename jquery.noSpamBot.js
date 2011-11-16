(function( $ ) {
  
  /**
   * @author Zsolt Lengyel
   * @email zsolt{dot}lengyel{dot}it{at}gmail{dot}com
   * 
   * The noSpamBot plugin. If an spambot is looking for e-mail at the site source, won't find.
   * But if an user want get the email address, it changes to human readable format.
   * The 'hover' event fires the change.
   * The 'click' event selects the address.
   */
  $.fn.noSpamBot = function(email, options) {
      if(!options){
          options = email; // if email is empty, thats options
          email = $(this).attr('email') // an alternative mode to give email
      }
        
      var settings = $.extend( {
          'dot': '{dot}',
          'at' : '{at}'        
      }, options);
      
    var realEmail = email.replace(settings.dot, '.').replace(settings.at, '@');

   (function($this){
      $(document).ready(function(){
        $($this).text(realEmail);
      });
    })(this);
        
  };
})( jQuery );