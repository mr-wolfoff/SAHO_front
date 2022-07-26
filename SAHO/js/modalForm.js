$('.close_button').on('click', (e) => {
  $('.modal_absolute').css({display: 'none'});
})

$('.m-1').on('click', (e) => e.stopPropagation())

$('.form_open1').on('click', (e) => {
  e.preventDefault();
  const height = document.body.scrollHeight;   
  $('.m-1').css({
    display: 'block',
    height
  })
})


$('.close_button').on('click', (e) => {
  $('.modal_absolute').css({display: 'none'});
})

$('.m-2').on('click', (e) => e.stopPropagation())

$('.form_open2').on('click', (e) => {
  e.preventDefault();
  const height = document.body.scrollHeight;   
  $('.m-2').css({
    display: 'block',
    height
  })
})


$('.close_button').on('click', (e) => {
  $('.modal_absolute').css({display: 'none'});
})

$('.m-3').on('click', (e) => e.stopPropagation())

$('.form_open3').on('click', (e) => {
  e.preventDefault();
  const height = document.body.scrollHeight;   
  $('.m-3').css({
    display: 'block',
    height
  })
})