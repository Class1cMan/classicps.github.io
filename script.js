document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const readRulesBtn = document.getElementById('read-rules-btn');
    const discordBtn = document.getElementById('discord-btn');
    const rulesSection = document.getElementById('rules');
    const continueBtn = document.getElementById('continue-btn');

    window.addEventListener('load', () => {
        window.scrollTo(0, 0); 
    });

    document.getElementById('discord-btn').addEventListener('click', function() {
        window.location.href = 'https://discord.gg/classicps'; 
    });

    document.getElementById('discord-btns').addEventListener('click', function() {
        window.location.href = 'https://discord.gg/classicps'; 
    });

    readRulesBtn.addEventListener('click', () => {
        rulesSection.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; 
    });

    continueBtn.addEventListener('click', () => {
        rulesSection.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    });

    discordBtn.addEventListener('click', () => {
        window.location.href = 'https://discord.gg/classicps';
    });

    const sections = document.querySelectorAll('section');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('in-view');
                section.classList.remove('out-of-view');
            } else {
                section.classList.remove('in-view');
                section.classList.add('out-of-view');
            }
        });
    };

    function addBounceEffect() {
        const discordBtn = document.getElementById('discord-btn');
        discordBtn.classList.add('bounce');
        
        discordBtn.addEventListener('animationend', () => {
            discordBtn.classList.remove('bounce');
        }, { once: true });
    }
    
    document.getElementById('discord-btn').addEventListener('click', addBounceEffect);

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const titles = ["Classic Private Serverr", "Best Private Serverr", "To have fun with friendss", "Join now!!", "0 Fake onlinee"];
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let typingForward = true;

    function updateTitle() {
        const currentTitle = titles[currentTitleIndex];
        let displayText = "";

        if (typingForward) {
            displayText = currentTitle.slice(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex === currentTitle.length) {
                typingForward = false;
                setTimeout(updateTitle, 1500);
                return;
            }
        } else {
            displayText = currentTitle.slice(0, currentCharIndex - 1);
            currentCharIndex--;
            if (currentCharIndex === 0) {
                typingForward = true;
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
                setTimeout(updateTitle, 500);
                return;
            }
        }

        document.title = displayText;
        setTimeout(updateTitle, typingForward ? 150 : 100);
    }

    updateTitle();
});
