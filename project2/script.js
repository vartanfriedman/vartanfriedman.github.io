$('#pizza').click(function () {
  $('#pizza-menu').css('display', 'block')
  $('article').not('#pizza-menu').css('display', 'none')
})
$('#snacks').click(function () {
  $('#snacks-menu').css('display', 'block')
  $('article').not('#snacks-menu').css('display', 'none')
})

$('#salads').click(function () {
  $('#salads-menu').css('display', 'block')
  $('article').not('#salads-menu').css('display', 'none')
})
