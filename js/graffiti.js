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

    // Outer positions (edges) — most dense, standard color
    var outer = [
        { top: '2%', left: '1%' },
        { top: '2%', right: '1%' },
        { top: '7%', left: '3%' },
        { top: '8%', right: '4%' },
        { top: '12%', left: '2%' },
        { top: '14%', right: '2%' },
        { top: '18%', left: '4%' },
        { top: '20%', right: '3%' },
        { top: '24%', left: '1%' },
        { top: '26%', right: '5%' },
        { top: '30%', left: '3%' },
        { top: '32%', right: '1%' },
        { top: '36%', left: '5%' },
        { top: '38%', right: '4%' },
        { top: '42%', left: '2%' },
        { top: '44%', right: '2%' },
        { top: '48%', left: '4%' },
        { top: '50%', right: '5%' },
        { top: '54%', left: '1%' },
        { top: '56%', right: '3%' },
        { top: '60%', left: '3%' },
        { top: '62%', right: '1%' },
        { top: '66%', left: '5%' },
        { top: '68%', right: '4%' },
        { top: '72%', left: '2%' },
        { top: '74%', right: '2%' },
        { top: '78%', left: '4%' },
        { top: '80%', right: '5%' },
        { top: '84%', left: '1%' },
        { top: '86%', right: '3%' },
        { top: '90%', left: '3%' },
        { top: '92%', right: '1%' },
        { top: '96%', left: '5%' },
        { top: '98%', right: '4%' }
    ];

    // Mid positions — moderate density, standard color
    var mid = [
        { top: '4%', left: '10%' },
        { top: '5%', right: '12%' },
        { top: '15%', left: '14%' },
        { top: '16%', right: '10%' },
        { top: '25%', left: '12%' },
        { top: '28%', right: '14%' },
        { top: '37%', left: '10%' },
        { top: '40%', right: '12%' },
        { top: '49%', left: '14%' },
        { top: '52%', right: '10%' },
        { top: '61%', left: '12%' },
        { top: '64%', right: '14%' },
        { top: '73%', left: '10%' },
        { top: '76%', right: '12%' },
        { top: '85%', left: '14%' },
        { top: '88%', right: '10%' },
        { top: '95%', left: '12%' },
        { top: '97%', right: '14%' }
    ];

    // Inner positions — sparse, lighter color (closer to content)
    var inner = [
        { top: '6%', left: '22%' },
        { top: '10%', right: '24%' },
        { top: '22%', left: '20%' },
        { top: '33%', right: '22%' },
        { top: '43%', left: '24%' },
        { top: '53%', right: '20%' },
        { top: '65%', left: '22%' },
        { top: '75%', right: '24%' },
        { top: '87%', left: '20%' },
        { top: '93%', right: '22%' },
        { top: '35%', left: '32%' },
        { top: '70%', right: '30%' }
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
