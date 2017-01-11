 $(function () {
   $('button').click( function () {

     $('#putBlocksHere').append('<div class="newBox" style="background-color:' + randColorString() +'""><p>x</p></div>');
   });  // appends a newBox to the DOM

   $('#putBlocksHere').on('click','.newBox' ,function () {
     $(this).css('background-color', 'black');
   }); // changes the blocks black when clicked

   $('#putBlocksHere').on('click', 'p', function () {
     $(this).parents('div').fadeOut(2000, function () {
          $(this).remove();
     });  // fades out block, then removes 'div'
   });    // when the paragraph (x) is clicked

 });

 function randColorString () {
 // creates a random rgb string for putting inline to the newBox.  this creates a random box color.
 var rand256a =  Math.floor(Math.random() * 256);
 var rand256b =  Math.floor(Math.random() * 256);
 var rand256c =  Math.floor(Math.random() * 256);

 return "rgb(" + rand256a + "," + rand256b + "," + rand256c + ")"
 };
