// $(function() {
//     $('.clockpicker').clockpicker({
//       'default': 'now',
//       vibrate: true,
//       placement: "top",
//       align: "left",
//       autoclose: false,
//       twelvehour: true
//     });
//   });

  // $("#selecting").flatpickr({
  //   altInput: true,
  //   altFormat: "j-F",
  //   dateFormat: "Y-m-d",
  // });
  $( '.flatpickr' ).flatpickr({
  	noCalendar: true,
    enableTime: true,
    dateFormat: 'h:i K'
  });

  