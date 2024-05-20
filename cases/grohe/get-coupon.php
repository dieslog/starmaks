<?

/**
*
*Script to return json array with random coupon
*
*Check if cookie is set and return same coupon
*
*Set cookie with coupon and discount
* 
**/

/* Alow only ajax requests */
if(strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest'){
	//die('401');
}

/* TODO: Check if there are answers to all quiz questions */


if (isset($_COOKIE['discount']) AND isset($_COOKIE['coupon'])){
	respond((int)$_COOKIE['discount'], $_COOKIE['coupon']);
}else{
	$item = getRandomCoupon();
	setLongCookie('coupon', $item['coupon']);
	setLongCookie('discount', $item['discount']);
	respond($item['discount'], $item['coupon']);
}


function respond($discount, $coupon){
	header('HTTP/1.1 200 OK');
	header('Content-Type: application/json; charset=UTF-8');
	die(json_encode(array('coupon' => $coupon, 'discount' => $discount)));
}

function setLongCookie($cookie, $value){
	setcookie($cookie, $value, time() + (10 * 365 * 24 * 60 * 60));
}

function getRandomCoupon(){
	$array = array(
		array('discount' => 2, 'coupon' => '3K5K-WK76-8A4W-6WWK'),
		array('discount' => 2, 'coupon' => '3K5K-WK76-8A4W-6WWK'),
		array('discount' => 3, 'coupon' => 'K453-A48B-85W6-7W88'),
		array('discount' => 3, 'coupon' => 'K453-A48B-85W6-7W88'),
		array('discount' => 3, 'coupon' => 'K453-A48B-85W6-7W88'),
		array('discount' => 5, 'coupon' => 'W774-3WBA-87K5-BWBW'),
		array('discount' => 5, 'coupon' => 'W774-3WBA-87K5-BWBW'),
		array('discount' => 5, 'coupon' => 'W774-3WBA-87K5-BWBW'),
		array('discount' => 8, 'coupon' => 'K75B-3638-KW43-66B3'),
		array('discount' => 8, 'coupon' => 'K75B-3638-KW43-66B3')
	);
	$random = array_rand($array);
	return $array[$random];
}


?>