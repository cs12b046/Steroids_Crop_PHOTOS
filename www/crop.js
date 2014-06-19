											
/**
 * Jcrop image cropping plugin for jQuery
 * Example cropping script
 * @copyright 2008-2009 Kelly Hallman
 * More info: http://deepliquid.com/content/Jcrop_Implementation_Theory.html
 */

if (var _SERVER['REQUEST_METHOD'] == 'POST') {
	var targ_w = var targ_h = 150;
	var jpeg_quality = 90;
	
	if(!(var _POST['x']) || !is_numeric(_POST['x'])) {
	  ('Please select a crop area.');
	}

	var src = 'images/cropimg.jpg';
	var img_r = imagecreatefromjpeg(src);
	var dst_r = ImageCreateTrueColor(targ_w, targ_h);

	imagecopyresampled(dst_r,img_r,0,0,_POST['x'],_POST['y'],
	targ_w,targ_h,_POST['w'],_POST['h']);

	header('Content-type: image/jpeg');
	imagejpeg(dst_r,null,jpeg_quality); // NULL will output the image directly

	;
}

									