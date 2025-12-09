document.addEventListener('DOMContentLoaded', function () {
    // Èíèöèàëèçàöèÿ ìîáèëüíîãî ìåíþ
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    mobileMenuBtn.addEventListener('click', function () {
        alert('Èíôîðìàöèîííàÿ ñèñòåìà "Êàðòî÷êà äîëæíèêà - Ôèçè÷åñêîå ëèöî"');
    });

    // Êíîïêè îáíîâëåíèÿ äàííûõ
    const refreshButtons = document.querySelectorAll('#refreshProfile, #refreshDocuments, #refreshCase, #refreshAdditional, #refreshConvictions');
    refreshButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');

            // Àíèìàöèÿ âðàùåíèÿ
            icon.style.transition = 'transform 0.5s ease';
            icon.style.transform = 'rotate(360deg)';

            // ×åðåç ïîëñåêóíäû âîçâðàùàåì îáðàòíî
            setTimeout(() => {
                icon.style.transform = 'rotate(0deg)';

                // Ïîêàçûâàåì ñîîáùåíèå îá îáíîâëåíèè
                alert('Äàííûå îáíîâëåíû. Âñå ïîëÿ îñòàþòñÿ ïóñòûìè, òàê êàê èíôîðìàöèÿ áóäåò çàãðóæàòüñÿ èç áàçû äàííûõ.');
            }, 500);
        });
    });

    // Îáðàáîòêà íàæàòèÿ íà ïîëÿ (òîëüêî äëÿ ÷òåíèÿ)
    const infoValues = document.querySelectorAll('.info-value');
    infoValues.forEach(value => {
        value.addEventListener('click', function () {
            // Ïðîñòî ïîêàçûâàåì, ÷òî ïîëå ïóñòîå
            console.log('Ïîëå "' + this.previousElementSibling.textContent + '" ïóñòîå');
        });
    });

    // Èíôîðìàöèÿ î ñèñòåìå ïðè çàãðóçêå
    console.log('Ñèñòåìà "Êàðòî÷êà äîëæíèêà - Ôèçè÷åñêîå ëèöî" çàãðóæåíà');
    console.log('Âñå ïîëÿ ïóñòûå, òàê êàê äàííûå áóäóò çàãðóæàòüñÿ èç áàçû äàííûõ');

    // Ôóíêöèÿ äëÿ çàãðóçêè ñóäèìîñòåé èç ÁÄ
    function loadConvictionsFromDB() {
        // Â ðåàëüíîì ïðèëîæåíèè çäåñü áóäåò AJAX-çàïðîñ ê ÁÄ
        // Ïðèìåð äàííûõ:
        /*
        const convictionsData = [
            {
                id: 1,
                article: "Ñòàòüÿ 159 ÓÊ ÐÔ 'Ìîøåííè÷åñòâî'",
                date: "15.03.2018",
                sentence: "3 ãîäà ëèøåíèÿ ñâîáîäû óñëîâíî",
                court: "Ëåíèíñêèé ðàéîííûé ñóä ã. Ìîñêâû",
                status: "Ïîãàøåíà",
                expirationDate: "15.03.2021"
            },
            {
                id: 2,
                article: "Ñòàòüÿ 158 ÓÊ ÐÔ 'Êðàæà'",
                date: "10.07.2015",
                sentence: "1 ãîä 6 ìåñÿöåâ ëèøåíèÿ ñâîáîäû",
                court: "Öåíòðàëüíûé ðàéîííûé ñóä ã. Ñàíêò-Ïåòåðáóðãà",
                status: "Ïîãàøåíà",
                expirationDate: "10.07.2018"
            }
        ];
        
        renderConvictions(convictionsData);
        */
    }

    // Ôóíêöèÿ äëÿ îòîáðàæåíèÿ ñóäèìîñòåé
    function renderConvictions(convictions) {
        const convictionsList = document.getElementById('convictionsList');

        if (!convictions || convictions.length === 0) {
            convictionsList.innerHTML = `
                <div class="empty-convictions">
                    <i class="fas fa-clipboard-list"></i>
                    <p>Ñïèñîê ñóäèìîñòåé ïóñò</p>
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
                            <div class="conviction-label">Ïðèãîâîð</div>
                            <div class="conviction-value">${conviction.sentence}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Ñóä</div>
                            <div class="conviction-value">${conviction.court}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Ñòàòóñ</div>
                            <div class="conviction-value">${conviction.status}</div>
                        </div>
                        <div class="conviction-detail">
                            <div class="conviction-label">Äàòà ïîãàøåíèÿ</div>
                            <div class="conviction-value">${conviction.expirationDate}</div>
                        </div>
                    </div>
                </div>
            `;
        });

        convictionsList.innerHTML = html;
    }

    // Çàãðóçêà ñóäèìîñòåé ïðè ñòàðòå (â ðåàëüíîì ïðèëîæåíèè áóäåò âûçûâàòüñÿ ïîñëå àâòîðèçàöèè)
    // loadConvictionsFromDB();
});
