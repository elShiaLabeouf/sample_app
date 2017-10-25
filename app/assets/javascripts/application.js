// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//


//= require jquery
//= require jquery_ujs
//= require bootstrap
// require rails-ujs
//= require turbolinks
//= require_tree .


function text_length() {
    var text = document.getElementById('text');
    var color = '#A9A9A9';
    var content = text.value;
    var contentwithoutspaces = content.replace(/\s+/g, '');
    var length = contentwithoutspaces.length;
    var textlength = document.getElementById('textlength');
    if (length > 140) color = '#ba5757';
    textlength.innerHTML = (length + '/140').fontcolor(color);
}
