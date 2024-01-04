const ranHex = () => [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
let score = 0;
let color = ranHex();
let count = 0;
function fy(a, b, c, d) {
    c = a.length;
    while (c) b = Math.random() * c-- | 0, d = a[c], a[c] = a[b], a[b] = d
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ", " + g + ", " + b + ")";
}

const clicked = (element) => {
    if (element.style.background === hexToRgb(color)) {
        score++;
        const cols = [];
        for (let i = 0; i < count; i++)
            cols.push(ranHex());
        cols.push(color = ranHex());
        fy(cols);
        let i = 0;
        for (let child of document.getElementById('colors').children) {
            child.classList.remove('wrong')
            child.setAttribute('style', 'background: #' + cols[i]);
            i++;
        }
        document.getElementById('cl').innerText = '#' + color.toUpperCase();
    } else {
        score--;
        element.classList.add('wrong');
    }
    document.getElementById('sc').innerText = 'Score: ' + score;
}

const setup = (mode) => {
    switch (mode) {
        case 'infinite':
            count = 9;
            const cols = [];
            for (let i = 0; i < count; i++) {
                const col = document.createElement("div");
                col.className = 'color';
                col.setAttribute('style', 'background: #' + ranHex());
                col.setAttribute('onclick', 'clicked(this)')
                cols.push(col);
            }
            const col = document.createElement("div");
            col.className = 'color';
            col.setAttribute('style', 'background: #' + color);
            col.setAttribute('onclick', 'clicked(this)')
            cols.push(col);
            fy(cols);
            document.getElementById('cl').innerText = '#' + color.toUpperCase();
            for (let col1 of cols) {
                document.getElementById('colors').appendChild(col1);
            }
            break;
        case 'onelife':
            break;
        case 'timer':
            break;
        default:
            throw new Error("Undefined game mode");
    }
}


