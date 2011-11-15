(function( $ ) {
   
   
   /**
    * This plugin helps select text anywhere
    */
   $.fn.selText = function() {
      var obj = this[0];
      if ($.browser.msie) {
          var range = obj.offsetParent.createTextRange();
          range.moveToElementText(obj);
          range.select();
      } else if ($.browser.mozilla || $.browser.opera) {
          var selection = obj.ownerDocument.defaultView.getSelection();
          var range = obj.ownerDocument.createRange();
          range.selectNodeContents(obj);
          selection.removeAllRanges();
          selection.addRange(range);
      } else if ($.browser.safari) {
          var selection = obj.ownerDocument.defaultView.getSelection();
          selection.setBaseAndExtent(obj, 0, obj, 1);
      }
      return this;
  } 
  
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
     
    $(this).text(email)
        .hover(   // on mouseover the e-mail changes ...
            function(){
                $(this).text(realEmail);
            }, // on mouseout back
            function(){
                $(this).text(email);
            }
        )
        .click(function(){ // on click selects the address
            $(this).selText();
        });

  };
})( jQuery );