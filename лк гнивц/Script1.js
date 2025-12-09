document.addEventListener('DOMContentLoaded', function () {
    // Инициализация мобильного меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    mobileMenuBtn.addEventListener('click', function () {
        alert('Информационная система "Карточка должника - Физическое лицо"');
    });

    // Кнопки обновления данных
    const refreshButtons = document.querySelectorAll('#refreshProfile, #refreshDocuments, #refreshCase, #refreshAdditional, #refreshConvictions');
    refreshButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');

            // Анимация вращения
            icon.style.transition = 'transform 0.5s ease';
            icon.style.transform = 'rotate(360deg)';

            // Через полсекунды возвращаем обратно
            setTimeout(() => {
                icon.style.transform = 'rotate(0deg)';

                // Показываем сообщение об обновлении
                alert('Данные обновлены. Все поля остаются пустыми, так как информация будет загружаться из базы данных.');
            }, 500);
        });
    });

    // Обработка нажатия на поля (только для чтения)
    const infoValues = document.querySelectorAll('.info-value');
    infoValues.forEach(value => {
        value.addEventListener('click', function () {
            // Просто показываем, что поле пустое
            console.log('Поле "' + this.previousElementSibling.textContent + '" пустое');
        });
    });

    // Информация о системе при загрузке
    console.log('Система "Карточка должника - Физическое лицо" загружена');
    console.log('Все поля пустые, так как данные будут загружаться из базы данных');

    // Функция для загрузки судимостей из БД
    function loadConvictionsFromDB() {
        // В реальном приложении здесь будет AJAX-запрос к БД
        // Пример данных:
        /*
        const convictionsData = [
            {
                id: 1,
                article: "Статья 159 УК РФ 'Мошенничество'",
                date: "15.03.2018",
                sentence: "3 года лишения свободы условно",
                court: "Ленинский районный суд г. Москвы",
                status: "Погашена",
                expirationDate: "15.03.2021"
            },
            {
                id: 2,
                article: "Статья 158 УК РФ 'Кража'",
                date: "10.07.2015",
                sentence: "1 год 6 месяцев лишения свободы",
                court: "Центральный районный суд г. Санкт-Петербурга",
                status: "Погашена",
                expirationDate: "10.07.2018"
            }
        ];
        
        renderConvictions(convictionsData);
        */
    }

    // Функция для отображения судимостей
    function renderConvictions(convictions) {
        const convictionsList = document.getElementById('convictionsList');

        if (!convictions || convictions.length === 0) {
            convictionsList.innerHTML = `
                <div class="empty-convictions">
                    <i class="fas fa-clipboard-list"></i>
                    <p>Список судимостей пуст</p>
                </div>
            `;
            return;
        }

        let html = '';

        convictions.forEach(conviction => {
            html += `
                <div class="conviction-item">
                    <div class="conviction-header">
                        <div class="conviction-title">${conviction.article}</div>
                        <div class="conviction-date">${conviction.date}</div>
                    </div>
                    <div class="conviction-details">
                        <div class="conviction-detail">
                            <div class="conviction-label">Приговор</div>
                            <div class="conviction-value">${conviction.sentence}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Суд</div>
                            <div class="conviction-value">${conviction.court}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Статус</div>
                            <div class="conviction-value">${conviction.status}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Дата погашения</div>
                            <div class="conviction-value">${conviction.expirationDate}</div>
                        </div>
                    </div>
                </div>
            `;
        });

        convictionsList.innerHTML = html;
    }

    // Загрузка судимостей при старте (в реальном приложении будет вызываться после авторизации)
    // loadConvictionsFromDB();
});