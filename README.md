Parallax is the word to describe why objects that are farther away appear to move slower than objects that are close up.

For example when you are in the passenger seat of a car, road signs and other cars seem to whiz by, but objects that are farther away like a mountain or a far away building or the moon move very slowly.

Emulating parallax in a web layout makes a very interesting and interactive experience, and has become a common design trend.

1. Get the px count of how far the user has scrolled. You can use the window scrollTop property.
  * $(window).scrollTop();
2. Listen to scroll events on the window object and update the positions of the elements you want 'parallaxed' according to that scrollTop number.
3. You might want to throttle how fast your parallax function(s) can update to prevent lag.

Examples of parallax effects implemented on the web:

* http://www.apple.com/macbook/
* http://www.dangersoffracking.com/
* http://www.boy-coy.com/#about (Links to an external site.)