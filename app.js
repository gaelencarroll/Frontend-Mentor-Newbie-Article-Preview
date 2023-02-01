const $shareBtn = $('.share-btn');
const $sharePopUp = $('.share-pop-up');
const $triangle = $('.triangle-down');

$sharePopUp.hide();
$triangle.hide();

$shareBtn.click(function(){
    $sharePopUp.show();
    $triangle.show();
    $shareBtn.addClass('change-btn');
})