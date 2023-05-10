$(function() {
    $('.up').on('click', function(e) {
      var wrapper = $(this).closest('div')
      wrapper.insertBefore(wrapper.prev())
    })
    $('.down').on('click', function(e) {
      var wrapper = $(this).closest('div')
      wrapper.insertAfter(wrapper.next())
    })
})
$( function () {
    $('.del').on('click', function(e){
        var elem = $(this).closest('div')
        elem.remove();
    })
})