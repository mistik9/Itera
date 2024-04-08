export const desc_avito = {
  list_name: "Главные преимущества приложения:",
  list: [
    { text: "Простота подключения! Подключение в несколько кликов!" },
    { text: "Возможность отправлять фото из Битрикс24 в диалог на Avito" },
    {
      text: "Загрузка данных из Avito на портал Битрикс24, в соответствии с пользовательскими настройками",
    },
    {
      text: "Название и иконка диалога в открытых линиях соответствует объявлению, в которое пишет клиент",
    },
    {
      text: "Возможность получения сообщений на портале Битрикс24, отправленных напрямую в чате Авито"
    }
  ],
};

export const updates_avito = [
  {
    list_name: "Август 2023г:",
    list: [
      {
        text: "Исправлена ошибка смены заголовка и иконки чата для порталов работающих по схеме лиды + CRM",
      },
      {
        text: "Добавлено автоматическое редактирование цитаты, которую пользователь отправляет из портала в читабельный формат",
      },
      {
        text: "Добавлена автоматическая отчистка тегов(b, br), которые Avito не распознаёт",
      },
    ],
  },
  {
    list_name: "Сентябрь 2023г:",
    list: [
      {
        text: "Добавлена передача данных в лиды для порталов, работающих по схеме лиды+сделки",
      },
      {
        text: "Настройки приложения теперь доступны в карточке лида, а не только в карточке сделки",
      },
      {
        text: "В настройках приложения можно выбрать, в какие поля лида записывать данные",
      },
    ],
  },
  {
    list_name: "Октябрь 2023г:",
    text: "Добавлена поддержка нескольких аккаунтов на портал",
  },
  {
    list_name: "Ноябрь 2023г:",
    list: [
      { text: "Добавлено уведомление о подключении/отключении аккаунта." },
    ],
  },
  {
    list_name: "Январь 2024г:",
    list: [
      {
        text: "Добавлена передача системных сообщений от Avito. Так же передаются те системные сообщения, которые отправляются Avito до того как клиент написал в диалог, такой функционал будет полезен пользователям, которые работают с вакансиями и недвижимостью.",
      },
    ],
  },
  {
    list_name: "Февраль 2024г:",
    list: [
      {
        text: "Добавлена возможность получения сообщений на портале Битрикс24, отправленных напрямую в чате Авито",
      },
    ],
  },
  {
    list_name: "Март 2024г:",
    list: [
      {
        text: "Добавлена возможность работы с сотрудниками. Настройка позволяет соотнести сотрудника Авито и Битрикс 24. Работает, если у Вас есть кабинет Avito Pro и добавлены сотрудники для работы с Вашими объявлениями. ",
      },
    ],
  },
];

export const faq_avito = [
  {
    title: "Как подключить?",
    list: [
      {
        text: 'Перейдите в CRM, далее Контакт-центр и выберите коннектор "Avito: чаты и товары".',
      },
      { link: "https://newitera.ru/screen/1.jpg" },
      { link: "https://newitera.ru/screen/2.jpg" },
      {
        text: 'Выберите открытую линию, если ее нет, нажмите "Создать открытую линию. ',
      },
      { link: "https://newitera.ru/screen/3.jpg" },
      { text: 'Нажмите "Подключить".' },
      { link: "https://newitera.ru/screen/4.jpg" },
      {
        text: "Если Вы уже авторизовались под своим вторым аккаунтом в текущем браузере то см. следующий пункт, если нет, то пройдите авторизацию на Avito.",
      },
      { link: "https://newitera.ru/screen/5.jpg" },
      { link: "https://newitera.ru/screen/6.jpg" },
      {
        text: "Появится окно, в котором будут перечислены доступы, которые запрашивает приложение у Вашего аккаунта, нажмите продолжить.",
      },
      { text: "Готово, аккаунт подключен!" },
      { link: "https://newitera.ru/screen/7.jpg" },
    ],
    id: "first-connect",
  },
  {
    title: "Как подключить второй аккаунт?",
    list: [
      {
        text: 'Перейдите в Контакт-центр и выберите коннектор "Avito: чаты и товары".',
      },
      { link: "https://newitera.ru/screen/1.jpg" },
      { link: "https://newitera.ru/screen/2.jpg" },
      {
        text: 'Выберите другую открытую линию, отличную от той, куда подключён первый аккаунт "Avito", если ее нет, нажмите "Создать открытую линию". ',
      },
      { link: "https://newitera.ru/screen/3.jpg" },
      { text: 'Нажмите "Подключить".' },
      { link: "https://newitera.ru/screen/4.jpg" },
      {
        text: "Если Вы уже авторизовались под своим вторым аккаунтом в текущем браузере то см. следующий пункт, если нет, то пройдите авторизацию на Avito.",
      },
      { link: "https://newitera.ru/screen/5.jpg" },
      { link: "https://newitera.ru/screen/6.jpg" },
      {
        text: "Появится окно, в котором будут перечислены доступы, которые запрашивает приложение у Вашего аккаунта, нажмите продолжить.",
      },
      { text: "Готово, аккаунт подключен!" },
      { link: "https://newitera.ru/screen/7.jpg" },
    ],
    id: "second-connect",
  },
  {
    title: "Как отключить аккаунт Авито?",
    list: [
      { text: "Отключение аккаунта и открытой линии от приложения." },
      {
        text: 'Перейдите в Контакт-центр и выберите коннектор "Avito: чаты и товары".',
      },
      { link: "https://newitera.ru/screen/unplug openlines acc.jpg" },
      { text: 'Нажмите кнопку "Отключить".' },
      { link: "https://newitera.ru/screen/unplug openlines acc2.jpg" },
      { text: "Готово, вы великолепны!" },
      {
        text: "Можно отключить только аккаунт Авито, без изменений настроек открытой линии",
      },
      {
        text: 'Перейдите в Контакт-центр и выберите коннектор "Avito: чаты и товары".',
      },
      { text: 'Нажмите кнопку "Изменить".' },
      { link: "https://newitera.ru/screen/unplug acc.jpg" },
      { text: 'Нажмите кнопку "Выйти".' },
      { link: "https://newitera.ru/screen/unplug acc2.jpg" },
      { text: "Готово, отключен только аккаунт Авито!" },
      { link: "https://newitera.ru/screen/unplug acc3.jpg" },
    ],
    id: "unplug",
  },
  {
    title: "Подключение дополнительных аккаунтов",
    text: "В рамках подписки на Битрикс24.Маркет Плюс доступно подключение двух аккаунтов Авито. Возможно подключение дополнительных аккаунтов, стоимость можно уточнить, обратившись в нашу поддержку",
    support: "https://t.me/+79958454368",
    support_wa: "https://wa.me/79958454368?text=",
    id: "more-acc",
  },
  {
    title: "Как включить получение сообщений отправленных напрямую в чате Авито?",
    list: [
      { text: 'В "Карточке CRM" в верхнем меню выбрать "Авито - Настройки".' },
      { link: "https://newitera.ru/screen/9.jpg" },
      { text: 'Поставить галочку "Отображать в диалоге сообщения, отправленные напрямую из чата Avito?".' },
      { text: 'Нажмите "Сохранить".' },
    ],
    id: "message-from-avito",
  },



  {
    title: "Какие данные получает приложение от Авито?",
    list: [
      { text: "В разделе CRM - Сделка/Лид" },
      { link: "https://newitera.ru/screen/crm.jpg" },
      { text: "Контакт" },
      { link: "https://newitera.ru/screen/contact.jpg" },
      { text: "Сделка" },
      { link: "https://newitera.ru/screen/deal.jpg" },
      { text: "Открытые линии" },
      { link: "https://newitera.ru/screen/open_lines.jpg" },
    ],
    id: "get-data",
  },
  {
    title: "Может ли приложение получать системные уведомления от Авито?",
    list: [
      {
        text: "При получении первого системного уведомления от Авито (когда покупатель еще ничего не написал) приложение получает все необходимые данные (покупатель, товар).",
      },
      { link: "https://newitera.ru/screen/system_ messages_bx1.jpg" },
      {
        text: "А так же все последующие системные уведомления от Авито. Такой функционал будет полезен пользователям, которые работают с вакансиями и недвижимостью ",
      },
      { link: "https://newitera.ru/screen/system_ messages_bx2.jpg" },
    ],
    id: "system_messages",
  },
  {
    title: "Как отключить автоматическое создание товаров?",
    list: [
      { text: 'В "Карточке CRM" в верхнем меню выбрать "Авито - Настройки".' },
      { link: "https://newitera.ru/screen/8.jpg" },
      { text: 'Убрать галочку "Добавлять товар в Битрикс24?".' },
      { text: 'Нажмите "Сохранить".' },
    ],
    id: "create-good",
  },
  {
    title: "Возможно ли получение уведомлений по Авито доставке?",
    text: "В текущей версии приложение данная функция не реализована.",
    id: "delivery",
  },
  {
    title: "Сообщения не приходят",
    text: "Сообщения и диалоги созданные в Авито или через другие интеграции до подключения аккаунта не передаются на портал. ",
    id: "no-message",
  },
  {
    title: "Как настроить приложение?",
    list: [
      {
        text: 'Для настройки приложения откройте любую сделку и в верхнем меню выберите "Авито - Настройки".',
      },
      { link: "https://newitera.ru/screen/8.jpg" },
    ],
    id: "settings",
  },
  {
    title: "Как установить приложение ?",
    text: "Установить приложение может только администратор портала.",
    id: "install",
  },

  {
    title: "Какие есть ограничения по отправке файлов?",
    list: [
      {
        text: "Можно отправлять картинки любого формата, максимальный размер 25Мб.",
      },
      {
        text: "Ограничение по длине текстового сообщение 1000 символов.",
      },
      { text: "Отправка документов, видео и голосовых сообщений на данный момент невозможна." },
    ],
    id: "limits",
  },

  {
    title: "Связанные профили на Авито",
    list: [
      {
        text: "Если у вас несколько профилей в связке, нужно подлючить каждый профиль отдельно, чтобы сообщения приходи в Битрикс24",
      },
      { text: "Авторизацию лучше проходить по email, т.к. номер телефона у связанных профилей может быть один" },
    ],
    id: "related-profiles",
  },
];

export const faq_autoload = [
  {
    title: "С чего начать?",
    list: [
      {
        text: "Установите приложение из Битрикс Маркета (установить может только пользователь с правами администратора)",
      },
      {
        text: "Откройте приложение в боковом меню портала",
      },
      { link: "https://newitera.ru/screen/autoload/1.png" },
    ],
    id: "start-autoload",
  },
  {
    title: "Как пользоваться?",
    list: [
      {
        text: 'Откройте приложение и пройдите в меню "Авторизация"',
      },
      { link: "https://newitera.ru/screen/autoload/2.png" },
      {
        text: 'Необходимо подключить аккаунт Авито, нажмите кнопку "Подключить"',
      },
      { link: "https://newitera.ru/screen/autoload/3.png" },
      {
        text: 'Если вы заходили в браузере в профиль Авито, нажмите "Продолжить", если необходимо выбрать другой аккаунт нажмите "Сменить аккаунт"',
      },
      { link: "https://newitera.ru/screen/autoload/4.png" },
      {
        text: "Можно подключить несколько аккаунтов Авито, необходимо повторить описанные выше действия",
      },
      {
        text: 'Перейдите в раздел "Прайсы"',
      },
      { link: "https://newitera.ru/screen/autoload/5.png" },
      {
        text: 'Введите название будущего прайса и нажмите кнопку "Создать"',
      },
      { link: "https://newitera.ru/screen/autoload/6.png" },
      {
        text: "Выберите категорию товаров или услуг в которой вы размещаете объявления на Авито",
      },
      { link: "https://newitera.ru/screen/autoload/7.png" },
      {
        text: "В выбранной категории заполните необходимые параметры",
      },
      { link: "https://newitera.ru/screen/autoload/8.png" },
      {
        text: "Если необходимых параметров нет, Вы их можете добавить в каталоге на портале и они появятся в выпадающем списке",
      },
      { link: "https://newitera.ru/screen/autoload/9.png" },
      {
        text: 'Нажмите кнопку "Сохранить"',
      },
      { link: "https://newitera.ru/screen/autoload/10.png" },
      {
        text: 'Выберите товары каталога. Добавить можно либо "Все товары" либо "Разделы каталога"',
      },
      { link: "https://newitera.ru/screen/autoload/11.png" },
      {
        text: 'Нажмите кнопку "Далее"',
      },
      { link: "https://newitera.ru/screen/autoload/12.png" },
      {
        text: "Выберите аккаунт Авито в который будут загружаться созданный прайс",
      },
      { link: "https://newitera.ru/screen/autoload/13.png" },
      {
        text: 'Нажмите кнопку "Сформировать прайс"',
      },
      { link: "https://newitera.ru/screen/autoload/14.png" },
      {
        text: "Прайс сформирован, Вы можете проверить на Авито файл, просмотреть сформированный XML файл и отправить его на Авито. При этом на Авито, у Вас уже должен быть создан и настроен профиль автозагрузки.",
      },
      { link: "https://newitera.ru/screen/autoload/15.png" },
      {
        text: "Файл XML отправлен на Авито",
      },
      { link: "https://newitera.ru/screen/autoload/16.png" },
    ],
    id: "use-autoload",
  },
  {
    title: "Можно ли отредактировать созданный прайс?",
    list: [
      {
        text: 'В боковом меню "Прайсы" можно посмотреть все созданные прайсы',
      },
      {
        text: "Выберите нужный прайс и нажмите на него.",
      },
      { link: "https://newitera.ru/screen/autoload/17.png" },
    ],
    id: "price-edit-autoload",
  },
  {
    title: "Где посмотреть все прайсы?",
    list: [
      {
        text: 'В боковом меню "Прайсы" можно посмотреть все созданные прайсы, редактировать или удалить их',
      },
      { link: "https://newitera.ru/screen/autoload/17.png" },
    ],
    id: "where-my-price",
  },
];
export const desc_autoload = {
  list_name: "Главные преимущества приложения:",
  list: [
    {
      text: "Моментальное изменение цены на Avito при изменении ее на портале в Битрикс 24",
    },
    {
      text: "Возможность размещать, обновлять все ваши объявления на Avito автоматически из портала Битрикс 24.",
    },
    {
      text: "Полностью автоматизированная выгрузка товаров!",
    },
    {
      text: "Можно подключить несколько аккаунтов Avito.",
    },
    {
      text: "Доступны все категории товаров или услуг, которые представлены на Avito в разделе Автозагрузка",
    },
  ],
};

export const updates_autoload = [];
export const about_autoload =
  "Приложение создает прайс для любой категории объявлений Avito. Прайс формируется из товаров и услуг, которые загружены на вашем портале. Настройки позволяют создать прайс, в соответствии с требованиями Avito. При обновлении товаров на портале прайс переформируется автоматически. Вы получите ссылку на файл XML, которая будет записана в настройки автозагрузки Avito.";

export const updates_drom = [
  {
    list_name: "Март 2024г:",
    list: [
      {
        text: "Теперь в поддержку можно написать напрямую из портала Битрикс24.",
      },
      {
        text: "Добавлена возможность работы с лидами. Для порталов работающих по схеме лиды + сделки, данные из объявления передаются в лид.",
      },
      {
        text: "Добавлена поддержка PDF формата, в исходящих сообщениях. Теперь из Битрикс24 можно отправлять PDF документы.",
      },
    ],
  }

];

export const faq_drom = [
  {
    title: "Как подключить?",
    list: [
      {
        text: 'Перейдите в CRM, далее Клиенты  и Контакт-центр',
      },
      { link: "https://newitera.ru/screen/drom/1.png" },
      {
        text: 'Выберите коннектор "ДРОМ: чаты, сделки, товары". Выберите открытую линию, если ее нет, нажмите "Создать открытую линию. Нажмите "Подключить" ',
      },
      { link: "https://newitera.ru/screen/drom/2.png" },
   
      {
        text: 'Введите Ваш логин на Drom, Нажмите кнопку "Войти через Telegram"',
      },
      { link: "https://newitera.ru/screen/drom/3.png" },
          {
        text: "Авторизация на Drom осуществляется через Telegram, номер которого привязан к аккаунту Drom. Необходимо сканировать QR-код телефоном на котором установлен Telegram или если у Вас приложение Telegram Desktop или Telegram открыт в браузере, можно кликнуть на QR-код",
      },
      { link: "https://newitera.ru/screen/drom/4.png" },
      { text: "Готово, аккаунт подключен!" },
      { link: "https://newitera.ru/screen/drom/5.png" },
    ],
    id: "first-connect",
  },
  {
    title: "Как отключить?",
    list: [
      { text: 'Аккаунт Drom отключается, если удалить приложение, отключить открытую линию, удалить открытую линию или нажать кнопку "Выйти" в боковом слайдере.' },
     
      { link: "https://newitera.ru/screen/drom/6.png" },
    ],
    id: "unplug",
  },

]