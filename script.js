document.addEventListener('DOMContentLoaded', () => {
    // Translation Data
    const translations = {
        'en': {
            'header-title': 'Project Performance Management System',
            'designed-by': 'Designed & Developed by',
            'card-bhu': 'Bhubaneswar Sewerage - PPMS',
            'card-sam': 'Sambalpur Water Supply - PPMS',
            'footer-copy': 'Project Performance Management System. All Rights Reserved.',
            'quick-links': 'Quick Links',
            'link-govt': 'Govt. of Odisha',
            'link-watco': 'Water Corporation of Odisha',
            'link-owssb': 'OWSSB, Odisha',
            'policies': 'Policies',
            'terms': 'Terms & Conditions',
            'security': 'Security Policy',
            'modal-title': 'Redirect Confirmation',
            'btn-yes': 'Yes',
            'btn-no': 'No',
            'modal-warning': 'Authorized Access Only!',
            'modal-msg': 'You are being redirected to the {portal} Portal. Do you wish to continue?'
        },
        'or': {
            'header-title': 'ପ୍ରକଳ୍ପ ପ୍ରଦର୍ଶନ ପରିଚାଳନା ପ୍ରଣାଳୀ',
            'designed-by': 'ସଂରଚନା ଏବଂ ବିକଶିତ',
            'card-bhu': 'ଭୁବନେଶ୍ୱର ସ୍ୱେରେଜ୍ - PPMS',
            'card-sam': 'ସମ୍ବଲପୁର ଜଳ ଯୋଗାଣ - PPMS',
            'footer-copy': 'ପ୍ରକଳ୍ପ ପ୍ରଦର୍ଶନ ପରିଚାଳନା ପ୍ରଣାଳୀ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
            'quick-links': 'ଶୀଘ୍ର ଲିଙ୍କ୍',
            'link-govt': 'ଓଡ଼ିଶା ସରକାର',
            'link-watco': 'ଓଡ଼ିଶା ଜଳ ନିଗମ (WATCO)',
            'link-owssb': 'OWSSB, ଓଡ଼ିଶା',
            'policies': 'ନୀତିଗୁଡିକ',
            'terms': 'ନିୟମ ଓ ସର୍ତ୍ତାବଳୀ',
            'security': 'ସୁରକ୍ଷା ନୀତି',
            'modal-title': 'ପୁନର୍ନିଦ୍ଦେଶ ନିଶ୍ଚିତକରଣ',
            'btn-yes': 'ହଁ',
            'btn-no': 'ନାଁ',
            'modal-warning': 'କେବଳ ଅଧିକୃତ ପ୍ରବେଶ!',
            'modal-msg': 'ଆପଣଙ୍କୁ {portal} ପୋର୍ଟାଲ୍‌କୁ ପୁନର୍ନିଦ୍ଦେଶିତ କରାଯାଉଛି। ଆପଣ ଜାରି ରଖିବାକୁ ଚାହୁଁଛନ୍ତି କି?'
        }
    };

    let currentLang = 'en';

    // Set dynamic year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Modal elements
    const modal = document.getElementById('redirectModal');
    const modalMsg = document.getElementById('modal-message');
    const btnYes = document.getElementById('confirmYes');
    const btnNo = document.getElementById('confirmNo');
    let pendingUrl = '';

    // Language switcher logic
    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        currentLang = lang;
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');
    };

    document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));
    document.getElementById('lang-or').addEventListener('click', () => updateContent('or'));

    // Handle card clicks
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            pendingUrl = card.getAttribute('data-url');
            const portalNameEn = card.getAttribute('data-portal-en');
            const portalNameOr = card.getAttribute('data-portal-or');
            const portalName = currentLang === 'en' ? portalNameEn : portalNameOr;

            const msgTemplate = translations[currentLang]['modal-msg'];
            modalMsg.textContent = msgTemplate.replace('{portal}', portalName);
            
            modal.style.display = 'block';
        });
    });

    // Modal YES redirect
    btnYes.addEventListener('click', () => {
        if (pendingUrl && pendingUrl !== '#') {
            window.location.href = pendingUrl;
        } else if (pendingUrl === '#') {
            const alertMsg = currentLang === 'en' ? 'This portal is under development.' : 'ଏହି ପୋର୍ଟାଲ୍ ବର୍ତ୍ତମାନ ବିକାଶାଧୀନ ଅଛି।';
            alert(alertMsg);
        }
        modal.style.display = 'none';
    });

    // Modal NO cancel
    btnNo.addEventListener('click', () => {
        modal.style.display = 'none';
        pendingUrl = '';
    });

    // Close modal if clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            pendingUrl = '';
        }
    });
});
