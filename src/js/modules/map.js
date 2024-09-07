import ymaps from 'ymaps';

ymaps
  .load(
    'https://api-maps.yandex.ru/2.1/?apikey=c4a41813-1996-4940-b589-a9f875e47c87&lang=ru_RU'
  )
  .then((maps) => {
    // Инициализируем карту с центром, зависящим от текущей ширины окна
    const initialCenter =
      window.innerWidth <= 576
        ? [54.986402, 73.311555]
        : [54.986402, 73.307];

    const map = new maps.Map(
      'map',
      {
        center: initialCenter,
        zoom: 17,
        controls: [],
      },
      { yandexMapDisablePoiInteractivity: true }
    );

    map.events.add('click', (e) => {
      const target = e.get('target');

      // Если клик по POI (точке интереса), предотвращаем событие
      if (target.getType && target.getType() === 'geometry') {
        e.preventDefault();
      }
    });

    map.behaviors.disable('scrollZoom'); // Отключаем зум по скроллу
    map.controls.remove('geolocationControl'); // Убираем кнопку геолокации
    map.controls.remove('searchControl'); // Убираем поисковую строку
    map.controls.remove('trafficControl'); // Убираем пробки
    map.controls.remove('typeSelector'); // Убираем тип карты (спутник/схема)
    map.controls.remove('fullscreenControl'); // Убираем кнопку полноэкранного режима
    map.controls.add('zoomControl'); // Добавляем контрол зума
    map.controls.remove('rulerControl'); // Убираем линейку
    map.controls.remove('routePanelControl'); // Убираем панель маршрутов

    map.behaviors.disable('click');

    // Добавляем кастомную метку (маркер)
    const placemark = new maps.Placemark(
      [54.986402, 73.311555], // Координаты маркера
      {
        hintContent: 'Мы здесь! г. Омск, ул. 70 лет Октября, 10', // Подсказка при наведении
      },
      {
        iconLayout: 'default#image', // Указываем, что будем использовать своё изображение
        iconImageHref: '../img/sprite.svg#marker', // Путь к SVG-спрайту и ID иконки
        iconImageSize: [100, 100], // Размер иконки (ширина, высота)
        iconImageOffset: [-35, -75], // Смещение иконки относительно её "ножки" (центр)
        hasBalloon: false,
      }
    );

    map.geoObjects.add(placemark); // Добавляем метку на карту

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
      const newCenter =
        window.innerWidth <= 576
          ? [54.986402, 73.311555]
          : [54.986402, 73.307];

      // Устанавливаем новый центр карты
      map.setCenter(newCenter);
    });
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error));