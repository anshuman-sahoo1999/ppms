document.addEventListener('DOMContentLoaded', () => {
    // Translation Data
    const translations = {
        'en': {
            'header-title': 'Project Performance Management System',
            'designed-by': 'Designed & Developed by',
            'card-bhu': 'Bhubaneswar Sewerage - PPMS',
            'card-sam': 'Sambalpur Water Supply - PPMS',
            'footer-copy': 'Project Performance Management System. All Rights Reserved.',
            'footer-address': 'Ecometrix Consultants Pvt. Ltd, DLF Cybercity, Patia, Bhubaneswar.',
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
            'btn-close': 'Close',
            'modal-warning': 'Authorized Access Only!',
            'modal-msg': 'You are being redirected to the {portal} Portal. Do you wish to continue?',
            'terms-content': `
                <h4>1. Acceptance of Terms</h4>
                <p>By accessing this portal, you agree to comply with all applicable laws and regulations of the Government of Odisha.</p>
                <h4>2. Authorized Access</h4>
                <p>Access is strictly limited to registered personnel of Odisha Govt, WATCO, OWSSB, and authorized consultants. Unauthorized use is a punishable offense.</p>
                <h4>3. Intellectual Property</h4>
                <p>All content, including data, logos, and reports, are the property of the respective government bodies and Ecometrix Consultants.</p>
            `,
            'security-content': `
                <h4>1. Data Protection</h4>
                <p>We implement industry-standard encryption to protect data in transit and at rest within the PPMS ecosystem.</p>
                <h4>2. User Responsibility</h4>
                <p>Users must maintain the confidentiality of their login credentials. Any security breach must be reported immediately.</p>
                <h4>3. Monitoring</h4>
                <p>All system access and activities are logged and monitored to prevent unauthorized or malicious activities.</p>
            `
        },
        'or': {
            'header-title': 'ପ୍ରକଳ୍ପ ପ୍ରଦର୍ଶନ ପରିଚାଳନା ପ୍ରଣାଳୀ',
            'designed-by': 'ସଂରଚନା ଏବଂ ବିକଶିତ',
            'card-bhu': 'ଭୁବନେଶ୍ୱର ସ୍ୱେରେଜ୍ - PPMS',
            'card-sam': 'ସମ୍ବଲପୁର ଜଳ ଯୋଗାଣ - PPMS',
            'footer-copy': 'ପ୍ରକଳ୍ପ ପ୍ରଦର୍ଶନ ପରିଚାଳନା ପ୍ରଣାଳୀ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
            'footer-address': 'Ecometrix Consultants Pvt. Ltd, DLF ସାଇବରସିଟି, ପାଟିଆ, ଭୁବନେଶ୍ୱର।',
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
            'btn-close': 'ବନ୍ଦ କରନ୍ତୁ',
            'modal-warning': 'କେବଳ ଅଧିକୃତ ପ୍ରବେଶ!',
            'modal-msg': 'ଆପଣଙ୍କୁ {portal} ପୋର୍ଟାଲ୍‌କୁ ପୁନର୍ନିଦ୍ଦେଶିତ କରାଯାଉଛି। ଆପଣ ଜାରି ରଖିବାକୁ ଚାହୁଁଛନ୍ତି କି?',
            'terms-content': `
                <h4>୧. ନିୟମାବଳୀର ଗ୍ରହଣ</h4>
                <p>ଏହି ପୋର୍ଟାଲ୍ ବ୍ୟବହାର କରି, ଆପଣ ଓଡ଼ିଶା ସରକାରଙ୍କ ସମସ୍ତ ପ୍ରଯୁଜ୍ୟ ନିୟମ ଏବଂ ନିୟମାବଳୀ ପାଳନ କରିବାକୁ ସମ୍ମତି ପ୍ରଦାନ କରୁଛନ୍ତି।</p>
                <h4>୨. ଅଧିକୃତ ପ୍ରବେଶ</h4>
                <p>ପ୍ରବେଶ କେବଳ ଓଡ଼ିଶା ସରକାର, WATCO, OWSSB ଏବଂ ଅଧିକୃତ ପରାମର୍ଶଦାତାଙ୍କ ପାଇଁ କଡ଼ାକଡ଼ି ଭାବରେ ସୀମିତ। ଅନଧିକୃତ ବ୍ୟବହାର ଏକ ଦଣ୍ଡନୀୟ ଅପରାଧ।</p>
                <h4>୩. ବୌଦ୍ଧିକ ସମ୍ପତ୍ତି</h4>
                <p>ସମସ୍ତ ବିଷୟବସ୍ତୁ, ତଥ୍ୟ, ଲୋଗୋ ଏବଂ ରିପୋର୍ଟ ସମ୍ପୃକ୍ତ ସରକାରୀ ସଂସ୍ଥା ଏବଂ Ecometrix Consultants ର ସମ୍ପତ୍ତି।</p>
            `,
            'security-content': `
                <h4>୧. ତଥ୍ୟ ସୁରକ୍ଷା</h4>
                <p>ଆମ୍ଭେ PPMS ପରିସଂସ୍ଥା ମଧ୍ୟରେ ତଥ୍ୟର ସୁରକ୍ଷା ପାଇଁ ଶିଳ୍ପ-ମାନକ ଏନକ୍ରିପସନ୍ ବ୍ୟବହାର କରୁଛୁ।</p>
                <h4>୨. ବ୍ୟବହାରକାରୀଙ୍କ ଦାୟିତ୍ୱ</h4>
                <p>ବ୍ୟବହାରକାରୀମାନେ ସେମାନଙ୍କର ଲଗଇନ୍ ବିବରଣୀର ଗୋପନୀୟତା ରକ୍ଷା କରିବା ଆବଶ୍ୟକ। ଯଦି କୌଣସି ସୁରକ୍ଷା ସମ୍ବନ୍ଧୀୟ ସମସ୍ୟା ଦେଖାଦିଏ, ତେବେ ତୁରନ୍ତ ସୂଚନା ଦିଅନ୍ତୁ।</p>
                <h4>୩. ନିରୀକ୍ଷଣ</h4>
                <p>ଅନଧିକୃତ ବା କ୍ଷତିକାରକ କାର୍ଯ୍ୟକଳାପକୁ ରୋକିବା ପାଇଁ ସମସ୍ତ ପ୍ରବେଶକୁ ଲଗ୍ ଏବଂ ନିରୀକ୍ଷଣ କରାଯାଇଥାଏ।</p>
            `
        }
    };

    let currentLang = 'en';

    // Dynamic Clock Function
    const updateClock = () => {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const dateTimeString = now.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'or-IN', options);
        const datetimeEl = document.getElementById('datetime');
        if (datetimeEl) {
            datetimeEl.textContent = dateTimeString;
        }
    };

    setInterval(updateClock, 1000);
    updateClock();

    // Set dynamic year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Modal elements
    const modals = document.querySelectorAll('.modal');
    const redirectModal = document.getElementById('redirectModal');
    const termsModal = document.getElementById('termsModal');
    const securityModal = document.getElementById('securityModal');
    
    const modalMsg = document.getElementById('modal-message');
    const termsContent = document.getElementById('terms-content');
    const securityContent = document.getElementById('security-content');
    
    const btnYes = document.getElementById('confirmYes');
    const btnNo = document.getElementById('confirmNo');
    let pendingUrl = '';

    // Language switcher logic
    const updateContent = (lang) => {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update Policy Contents
        if (termsContent) termsContent.innerHTML = translations[lang]['terms-content'];
        if (securityContent) securityContent.innerHTML = translations[lang]['security-content'];
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');
        
        updateClock(); // Refresh clock to match language
    };

    document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));
    document.getElementById('lang-or').addEventListener('click', () => updateContent('or'));

    // Initialize policy contents
    updateContent('en');

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
            
            redirectModal.style.display = 'block';
        });
    });

    // Handle Policy Clicks
    document.getElementById('link-terms').addEventListener('click', () => {
        termsModal.style.display = 'block';
    });

    document.getElementById('link-security').addEventListener('click', () => {
        securityModal.style.display = 'block';
    });

    // Modal YES redirect
    btnYes.addEventListener('click', () => {
        if (pendingUrl && pendingUrl !== '#') {
            window.location.href = pendingUrl;
        } else if (pendingUrl === '#') {
            const alertMsg = currentLang === 'en' ? 'This portal is under development.' : 'ଏହି ପୋର୍ଟାଲ୍ ବର୍ତ୍ତମାନ ବିକାଶାଧୀନ ଅଛି।';
            alert(alertMsg);
        }
        redirectModal.style.display = 'none';
    });

    // Modal close handlers
    document.querySelectorAll('.close-modal, #confirmNo').forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(m => m.style.display = 'none');
            pendingUrl = '';
        });
    });

    // Close modal if clicking outside content
    window.addEventListener('click', (event) => {
        modals.forEach(m => {
            if (event.target === m) {
                m.style.display = 'none';
                pendingUrl = '';
            }
        });
    });

    // Header: scroll-based styling + cursor parallax (respect reduced motion)
    const mainHeader = document.getElementById('main-header');
    const headerParallax = document.getElementById('header-parallax');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScrollHeader = () => {
        if (!mainHeader) return;
        const y = window.scrollY || document.documentElement.scrollTop;
        mainHeader.classList.toggle('is-scrolled', y > 12);
    };

    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();

    if (mainHeader && headerParallax && !reduceMotion) {
        let raf = 0;
        const maxShift = 10;

        mainHeader.addEventListener('mousemove', (e) => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const rect = mainHeader.getBoundingClientRect();
                const nx = (e.clientX - rect.left) / rect.width - 0.5;
                const ny = (e.clientY - rect.top) / rect.height - 0.5;
                headerParallax.style.transform =
                    `translate(${nx * maxShift}px, ${ny * maxShift * 0.65}px)`;
            });
        });

        mainHeader.addEventListener('mouseleave', () => {
            headerParallax.style.transform = '';
        });
    }
});
