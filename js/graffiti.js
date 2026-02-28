(function () {
    var chars = [
        'ʕ•ᴥ•ʔ', '(⌐■_■)', '☆ﾟ.*', 'ʕつ•ᴥ•ʔつ', '(◕‿◕✿)',
        '⌐■-■', '~(˘▾˘~)', '♪(´ε` )', '(～￣▽￣)～', '✧･ﾟ:*',
        '♡', '★', '(╯°□°)╯', '(⌒‿⌒)', '☆', '♪', '✿',
        '( ⌒o⌒)人(⌒-⌒ )v', '٩(◕‿◕｡)۶', '(ノ´ヮ`)ノ*:・ﾟ✧',
        '(=^・ω・^=)', '♬', '°˖✧', '⋆｡ﾟ', '(　´∀｀)', '❀',
        'ヽ(>∀<☆)ノ', '⌐◨-◨', '(•̀ᴗ•́)و', '✦'
    ];

    var positions = [
        { top: '3%', left: '2%' },
        { top: '3%', right: '3%' },
        { top: '8%', left: '5%' },
        { top: '10%', right: '6%' },
        { top: '15%', left: '3%' },
        { top: '17%', right: '2%' },
        { top: '22%', left: '6%' },
        { top: '24%', right: '5%' },
        { top: '28%', left: '2%' },
        { top: '31%', right: '3%' },
        { top: '35%', left: '4%' },
        { top: '38%', right: '6%' },
        { top: '42%', left: '5%' },
        { top: '45%', right: '2%' },
        { top: '48%', left: '3%' },
        { top: '52%', right: '4%' },
        { top: '55%', left: '6%' },
        { top: '58%', right: '3%' },
        { top: '62%', left: '2%' },
        { top: '65%', right: '5%' },
        { top: '68%', left: '4%' },
        { top: '72%', right: '2%' },
        { top: '75%', left: '5%' },
        { top: '78%', right: '6%' },
        { top: '82%', left: '3%' },
        { top: '85%', right: '3%' },
        { top: '88%', left: '6%' },
        { top: '92%', right: '4%' },
        { top: '95%', left: '2%' },
        { top: '97%', right: '2%' }
    ];

    var container = document.createElement('div');
    container.className = 'graffiti';
    container.setAttribute('aria-hidden', 'true');

    for (var i = 0; i < positions.length; i++) {
        var span = document.createElement('span');
        span.className = 'g';
        span.textContent = chars[i % chars.length];
        span.style.top = positions[i].top;
        if (positions[i].left) span.style.left = positions[i].left;
        if (positions[i].right) span.style.right = positions[i].right;
        container.appendChild(span);
    }

    document.body.insertBefore(container, document.body.firstChild);
})();
