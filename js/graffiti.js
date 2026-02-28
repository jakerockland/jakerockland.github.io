(function () {
    var chars = [
        'ʕ•ᴥ•ʔ', '(⌐■_■)', '☆ﾟ.*', 'ʕつ•ᴥ•ʔつ', '(◕‿◕✿)',
        '⌐■-■', '~(˘▾˘~)', '♪(´ε` )', '(～￣▽￣)～', '✧･ﾟ:*',
        '♡', '★', '(╯°□°)╯', '(⌒‿⌒)', '☆', '♪', '✿',
        '( ⌒o⌒)人(⌒-⌒ )v', '٩(◕‿◕｡)۶', '(ノ´ヮ`)ノ*:・ﾟ✧',
        '(=^・ω・^=)', '♬', '°˖✧', '⋆｡ﾟ', '(　´∀｀)', '❀',
        'ヽ(>∀<☆)ノ', '⌐◨-◨', '(•̀ᴗ•́)و', '✦'
    ];

    // Spread from edge (~1%) all the way in toward the content column (~25%)
    var positions = [
        { top: '2%', left: '1%' },
        { top: '2%', right: '2%' },
        { top: '6%', left: '14%' },
        { top: '7%', right: '18%' },
        { top: '10%', left: '4%' },
        { top: '11%', right: '8%' },
        { top: '14%', left: '22%' },
        { top: '16%', right: '25%' },
        { top: '18%', left: '9%' },
        { top: '20%', right: '3%' },
        { top: '23%', left: '18%' },
        { top: '25%', right: '14%' },
        { top: '28%', left: '2%' },
        { top: '30%', right: '22%' },
        { top: '33%', left: '12%' },
        { top: '35%', right: '6%' },
        { top: '38%', left: '24%' },
        { top: '40%', right: '16%' },
        { top: '43%', left: '6%' },
        { top: '45%', right: '24%' },
        { top: '48%', left: '16%' },
        { top: '50%', right: '2%' },
        { top: '53%', left: '3%' },
        { top: '55%', right: '12%' },
        { top: '58%', left: '20%' },
        { top: '60%', right: '20%' },
        { top: '63%', left: '8%' },
        { top: '65%', right: '5%' },
        { top: '68%', left: '24%' },
        { top: '70%', right: '18%' },
        { top: '73%', left: '4%' },
        { top: '75%', right: '24%' },
        { top: '78%', left: '15%' },
        { top: '80%', right: '8%' },
        { top: '83%', left: '22%' },
        { top: '85%', right: '14%' },
        { top: '88%', left: '7%' },
        { top: '90%', right: '22%' },
        { top: '93%', left: '18%' },
        { top: '95%', right: '3%' },
        { top: '97%', left: '2%' },
        { top: '98%', right: '10%' }
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
