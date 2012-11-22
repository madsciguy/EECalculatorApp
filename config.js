// JavaScript Gobal Config Stuff Goes Here



// RID PAGE TRANSITIONS helps to speed up APP ;)
//$(document).bind("mobileinit", function(){
//      $.mobile.defaultPageTransition = 'none';
//      $.mobile.defaultDialogTransition = 'none';
//      $.mobile.useFastClick = true;
//});

$(document).bind("mobileinit", function() {
      //Set your global init settings here
      //This is the setting you are looking for!      
      $.mobile.defaultPageTransition = 'none';

      //I personally use some other settings, such as:
      $.mobile.page.prototype.options.addBackBtn = true;
      $.mobile.useFastClick  = false;
});