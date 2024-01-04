export const desc_avito =
{
    list_name: 'Главные преимущества приложения:',
    list: [
        { 'text': 'Простота подключения! Подключение в несколько кликов!' },
        { 'text': 'Возможность отправлять фото из Битрикс24 в диалог на Avito' },
        { 'text': 'Загрузка данных из Avito на портал Битрикс24, в соответствии с пользовательскими настройками' },
        { 'text': 'Название и иконка диалога в открытых линиях соответствует объявлению, в которое пишет клиент' },
    ]
}



export const updates_avito = [
    {
        list_name: 'Август 2023г:',
        list: [
            { 'text': 'Исправлена ошибка смены заголовка и иконки чата для порталов работающих по схеме лиды + CRM' },
            { 'text': 'Добавлено автоматическое редактирование цитаты, которую пользователь отправляет из портала в читабельный формат' },
            { 'text': 'Добавлена автоматическая отчистка тегов(b, br), которые Avito не распознаёт' },
        ]
    },
    {
        list_name: 'Сентябрь 2023г:',
        list: [
            { 'text': 'Добавлена передача данных в лиды для порталов, работающих по схеме лиды+сделки' },
            { 'text': 'Настройки приложения теперь доступны в карточке лида, а не только в карточке сделки' },
            { 'text': 'В настройках приложения можно выбрать, в какие поля лида записывать данные' },
        ]
    },
    {
        list_name: 'Октябрь 2023г:',
        text: 'Добавлена поддержка нескольких аккаунтов на портал'
    },
    {
        list_name: 'Ноябрь 2023г:',
        list: [
            { 'text': 'Добавлено уведомление о подключении/отключении аккаунта.' },
        ]
    },
]


export const faq_avito = [
    {
        title: 'Как подключить?',
        list: [
            { 'text': 'Перейдите в CRM, далее Контакт-центр и выберите коннектор "Avito: чаты и товары".' },
            { 'link': "https://newitera.ru/screen/1.jpg" },
            { 'link': "https://newitera.ru/screen/2.jpg" },
            { 'text': 'Выберите открытую линию, если ее нет, нажмите "Создать открытую линию. ' },
            { 'link': "https://newitera.ru/screen/3.jpg" },
            { 'text': 'Нажмите "Подключить".' },
            { 'link': "https://newitera.ru/screen/4.jpg" },
            { 'text': 'Если Вы уже авторизовались под своим вторым аккаунтом в текущем браузере то см. следующий пункт, если нет, то пройдите авторизацию на Avito.' },
            { 'link': "https://newitera.ru/screen/5.jpg" },
            { 'link': "https://newitera.ru/screen/6.jpg" },
            { 'text': 'Появится окно, в котором будут перечислены доступы, которые запрашивает приложение у Вашего аккаунта, нажмите продолжить.' },
            { 'text': 'Готово, аккаунт подключен!' },
            { 'link': "https://newitera.ru/screen/7.jpg" },
        ],
        id: "first-connect"

    },
    {
        title: 'Как подключить второй аккаунт?',
        list: [
            { 'text': 'Перейдите в Контакт-центр и выберите коннектор "Avito: чаты и товары".' },
            { 'link': "https://newitera.ru/screen/1.jpg" },
            { 'link': "https://newitera.ru/screen/2.jpg" },
            { 'text': 'Выберите другую открытую линию, отличную от той, куда подключён первый аккаунт "Avito", если ее нет, нажмите "Создать открытую линию". ' },
            { 'link': "https://newitera.ru/screen/3.jpg" },
            { 'text': 'Нажмите "Подключить".' },
            { 'link': "https://newitera.ru/screen/4.jpg" },
            { 'text': 'Если Вы уже авторизовались под своим вторым аккаунтом в текущем браузере то см. следующий пункт, если нет, то пройдите авторизацию на Avito.' },
            { 'link': "https://newitera.ru/screen/5.jpg" },
            { 'link': "https://newitera.ru/screen/6.jpg" },
            { 'text': 'Появится окно, в котором будут перечислены доступы, которые запрашивает приложение у Вашего аккаунта, нажмите продолжить.' },
            { 'text': 'Готово, аккаунт подключен!' },
            { 'link': "https://newitera.ru/screen/7.jpg" },
        ],
        id: "second-connect"
    },
    {
        title: 'Как отключить автоматическое создание товаров?',
        list: [
            { 'text': 'В "Карточке CRM" в верхнем меню выбрать "Авито - Настройки".' },
            { 'link': "https://newitera.ru/screen/8.jpg" },
            { 'text': 'Убрать галочку "Добавлять товар в Битрикс24?".' },
            { 'text': 'Нажмите "Сохранить".' },
        ],
        id: "create-good"

    },
    {
        title: 'Возможно ли получение уведомлений по Авито доставке?',
        text: 'В текущей версии приложение данная функция не реализована.',
        id: "delivery"
    },
    {
        title: 'Возможно ли получение сообщений на портале отправленных напрямую в Авито?',
        text: 'В текущей версии приложение данная функция не реализована.',
        id: "message-without-app"
    },
    {
        title: 'Как настроить приложение?',
        list: [
            { 'text': 'Для настройки приложения откройте любую сделку и в верхнем меню выберите "Авито - Настройки".' },
            { 'link': "https://newitera.ru/screen/8.jpg" },
        ],
        id: "settings"
    },
    {
        title: 'Как установить приложение ?',
        text: 'Установить приложение может только администратор портала.',
        id: "install"
    },
    
    {
        title: 'Какие есть ограничения по отправке файлов?',
        list: [
            { 'text': 'Можно отправлять картинки любого формата, максимальный размер 25Мб.' },
            { 'text': 'Отправка документов и видео на данный момент невозможна.' },
        ],
        id: "limits"
    },
]