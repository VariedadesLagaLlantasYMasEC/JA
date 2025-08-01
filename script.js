$(document).ready(function(){
  // Al cargar la pagina, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // 🎵 Reproducir musica al hacer clic
    document.getElementById("bg-music").play();

    // Animacion de desvanecimiento de los elementos del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      // Hacer visible la carta con una animacion ondulante
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#card').animate({'opacity': 1}, {
        duration: 1000,
        step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1;
          $(this).css('transform', 'scale(' + scale + ')');
        }
      });
    });
  });
});
