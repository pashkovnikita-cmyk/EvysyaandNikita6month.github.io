<script>
  let pressTimer;

  // Функция, которая сбрасывает масштаб (отдаляет)
  function resetZoom() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      // Временно форсируем масштаб 1.0
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      
      // Через мгновение возвращаем возможность зумить обратно
      setTimeout(() => {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
      }, 300);
    }
  }

  // Обработчики для мобильных устройств (тач-события)
  window.addEventListener('touchstart', (e) => {
    // Запускаем таймер при касании пальцем (800 мс = 0.8 секунды зажатия)
    pressTimer = setTimeout(() => {
      resetZoom();
    }, 800); 
  });

  window.addEventListener('touchend', () => {
    // Если палец убрали раньше времени, отменяем отдаление
    clearTimeout(pressTimer);
  });

  window.addEventListener('touchmove', () => {
    // Если пользователь начал двигать пальцем (скроллить внутри зума), отменяем таймер
    clearTimeout(pressTimer);
  });
</script>