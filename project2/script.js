$('#pizza').click(function() {
    $('#pizza-menu').css('display', 'block')
    $('article').not('#pizza-menu').css('display', 'none')
})
$('#snacks').click(function() {
    $('#snacks-menu').css('display', 'block')
    $('article').not('#snacks-menu').css('display', 'none')
})
