(function () {
    var chars = [
        'ʕ•ᴥ•ʔ', '(⌐■_■)', '☆ﾟ.*', 'ʕつ•ᴥ•ʔつ', '(◕‿◕✿)',
        '⌐■-■', '~(˘▾˘~)', '♪(´ε` )', '(～￣▽￣)～', '✧･ﾟ:*',
        '♡', '★', '(╯°□°)╯', '(⌒‿⌒)', '☆', '♪', '✿',
        '( ⌒o⌒)人(⌒-⌒ )v', '٩(◕‿◕｡)۶', '(ノ´ヮ`)ノ*:・ﾟ✧',
        '(=^・ω・^=)', '♬', '°˖✧', '⋆｡ﾟ', '(　´∀｀)', '❀',
        'ヽ(>∀<☆)ノ', '⌐◨-◨', '(•̀ᴗ•́)و', '✦', '(ᵔᴥᵔ)',
        '♪～(´ε｀ )', '(⊃｡•́‿•̀｡)⊃', '(｡◕‿◕｡)', '✾', '⚘',
        '(づ￣ ³￣)づ', '☼', '◉‿◉', '(◠‿◠)', '♫', '❋',
        '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧', '(¬‿¬)', '٩(^‿^)۶', '(◕ᴗ◕✿)',
        '⁂', '❊', '(ꈍᴗꈍ)', '☽', '✵', '(⌐⊙_⊙)'
    ];

    // Outer positions (edges, ~1-6%) — spaced ~6% apart vertically
    var outer = [
        { top: '2%', left: '1%' },
        { top: '3%', right: '2%' },
        { top: '9%', left: '4%' },
        { top: '10%', right: '3%' },
        { top: '16%', left: '2%' },
        { top: '17%', right: '5%' },
        { top: '23%', left: '5%' },
        { top: '24%', right: '1%' },
        { top: '30%', left: '3%' },
        { top: '31%', right: '4%' },
        { top: '37%', left: '1%' },
        { top: '38%', right: '2%' },
        { top: '44%', left: '4%' },
        { top: '45%', right: '5%' },
        { top: '51%', left: '2%' },
        { top: '52%', right: '3%' },
        { top: '58%', left: '5%' },
        { top: '59%', right: '1%' },
        { top: '65%', left: '3%' },
        { top: '66%', right: '4%' },
        { top: '72%', left: '1%' },
        { top: '73%', right: '2%' },
        { top: '79%', left: '4%' },
        { top: '80%', right: '5%' },
        { top: '86%', left: '2%' },
        { top: '87%', right: '3%' },
        { top: '93%', left: '5%' },
        { top: '94%', right: '1%' }
    ];

    // Mid positions (~8-16%) — denser fill for large screens
    var mid = [
        { top: '3%', left: '10%' },
        { top: '4%', right: '12%' },
        { top: '10%', left: '14%' },
        { top: '12%', right: '9%' },
        { top: '18%', left: '11%' },
        { top: '20%', right: '14%' },
        { top: '26%', left: '9%' },
        { top: '28%', right: '11%' },
        { top: '34%', left: '13%' },
        { top: '36%', right: '10%' },
        { top: '42%', left: '10%' },
        { top: '44%', right: '13%' },
        { top: '50%', left: '14%' },
        { top: '52%', right: '9%' },
        { top: '58%', left: '11%' },
        { top: '60%', right: '14%' },
        { top: '66%', left: '9%' },
        { top: '68%', right: '11%' },
        { top: '74%', left: '13%' },
        { top: '76%', right: '10%' },
        { top: '82%', left: '10%' },
        { top: '84%', right: '13%' },
        { top: '90%', left: '14%' },
        { top: '92%', right: '9%' },
        { top: '97%', left: '11%' },
        { top: '98%', right: '12%' }
    ];

    // Inner positions (~18-32%) — lighter color, closer to content
    var inner = [
        { top: '5%', left: '20%' },
        { top: '7%', right: '22%' },
        { top: '14%', left: '25%' },
        { top: '18%', right: '19%' },
        { top: '24%', left: '22%' },
        { top: '29%', right: '25%' },
        { top: '35%', left: '19%' },
        { top: '40%', right: '22%' },
        { top: '46%', left: '24%' },
        { top: '51%', right: '20%' },
        { top: '57%', left: '21%' },
        { top: '62%', right: '24%' },
        { top: '68%', left: '20%' },
        { top: '73%', right: '22%' },
        { top: '79%', left: '25%' },
        { top: '84%', right: '19%' },
        { top: '90%', left: '22%' },
        { top: '95%', right: '21%' },
        { top: '33%', left: '30%' },
        { top: '55%', right: '30%' },
        { top: '77%', left: '30%' },
        { top: '15%', right: '30%' }
    ];

    var container = document.createElement('div');
    container.className = 'graffiti';
    container.setAttribute('aria-hidden', 'true');

    var ci = 0;

    function addSpan(pos, extraClass) {
        var span = document.createElement('span');
        span.className = 'g' + (extraClass ? ' ' + extraClass : '');
        span.textContent = chars[ci % chars.length];
        span.style.top = pos.top;
        if (pos.left) span.style.left = pos.left;
        if (pos.right) span.style.right = pos.right;
        container.appendChild(span);
        ci++;
    }

    for (var i = 0; i < outer.length; i++) addSpan(outer[i]);
    for (var i = 0; i < mid.length; i++) addSpan(mid[i]);
    for (var i = 0; i < inner.length; i++) addSpan(inner[i], 'g-inner');

    document.body.insertBefore(container, document.body.firstChild);
})();
