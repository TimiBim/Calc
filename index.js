window.onkeydown = function (e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 49) { //up key
        document.getElementById('resultArea').innerHTML += '1'
        all()
    } else if (code === 50) {
        document.getElementById('resultArea').innerHTML += '2'
        all()
    } else if (code === 51) {
        document.getElementById('resultArea').innerHTML += '3'
        all()
    } else if (code === 52) {
        document.getElementById('resultArea').innerHTML += '4'
        all()
    } else if (code === 53) {
        document.getElementById('resultArea').innerHTML += '5'
        all()
    } else if (code === 54) {
        document.getElementById('resultArea').innerHTML += '6'
        all()
    } else if (code === 55) {
        document.getElementById('resultArea').innerHTML += '7'
        all()
    } else if (code === 56) {
        document.getElementById('resultArea').innerHTML += '8'
        all()
    } else if (code === 57) {
        document.getElementById('resultArea').innerHTML += '9'
        all()
    } else if (code === 48) {
        document.getElementById('resultArea').innerHTML += '0'
        all()
    } else if (code === 188) {
        document.getElementById('resultArea').innerHTML += '.'
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('..')) {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }} else if (code === 13) {
        all()
        result()
    } else if (code === 8) {
        resultDeleteLast()
        all()
    } else if (code === 46) {
        resultDelete()
        all()
    } else if (code === 111) {
        document.getElementById('resultArea').innerHTML += ' / '
        clear()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('/  / ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 106) {
        document.getElementById('resultArea').innerHTML += ' * '
        clear()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('*  * ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 107) {
        document.getElementById('resultArea').innerHTML += ' + '
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('+  + ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 109) {
        document.getElementById('resultArea').innerHTML += ' - '
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('-  - ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 103) {
        document.getElementById('resultArea').innerHTML += '7'
        all()
    } else if (code === 104) {
        document.getElementById('resultArea').innerHTML += '8'
        all()
    } else if (code === 105) {
        document.getElementById('resultArea').innerHTML += '9'
        all()
    } else if (code === 100) {
        document.getElementById('resultArea').innerHTML += '4'
        all()
    } else if (code === 101) {
        document.getElementById('resultArea').innerHTML += '5'
        all()
    } else if (code === 102) {
        document.getElementById('resultArea').innerHTML += '6'
        all()
    } else if (code === 97) {
        document.getElementById('resultArea').innerHTML += '1'
        all()
    } else if (code === 98) {
        document.getElementById('resultArea').innerHTML += '2'
        all()
    } else if (code === 99) {
        document.getElementById('resultArea').innerHTML += '3'
        all()
    } else if (code === 96) {
        document.getElementById('resultArea').innerHTML += '0'
        all()
    } else if (code === 110) {
        document.getElementById('resultArea').innerHTML += '.'
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('..')) {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }} else if (code === 190) {
        document.getElementById('resultArea').innerHTML += '.'
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('..')) {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }} else if (code === 189) {
        document.getElementById('resultArea').innerHTML += ' - '
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('-  - ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 187) {
        document.getElementById('resultArea').innerHTML += ' + '
        all()
        let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('+  + ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 67) {
        document.getElementById('resultArea').innerHTML = ''
        all()
    } else if (code === 68) {
        document.getElementById('resultArea').innerHTML += ' / '
        let container = document.getElementById('resultArea');
        if (container.innerHTML.endsWith('/  / ')) {
            container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 77) {
        document.getElementById('resultArea').innerHTML += ' * '
        let container = document.getElementById('resultArea');
        if (container.innerHTML.endsWith('*  * ')) {
            container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 90) {
        document.getElementById('resultArea').innerHTML += ' ( '
        all()
        let container = document.getElementById('resultArea');
        if (container.innerHTML.endsWith('(  (  ( ')) {
            container.innerHTML = container.innerHTML.slice(0, -3)
    }} else if (code === 85) {
        document.getElementById('resultArea').innerHTML += ' ) '
        all()
        let container = document.getElementById('resultArea');
        if (container.innerHTML.endsWith(')  )  ) ')) {
            container.innerHTML = container.innerHTML.slice(0, -3)
    }}
};

function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    document.getElementById('error').innerText = '';
}

function appendOperationPlus(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('+  + ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
    document.getElementById('error').innerText = '';
}

function appendOperationMinus(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('-  - ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
    document.getElementById('error').innerText = '';
}

function appendOperationDivided(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('/  / ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
    clear()
}

function appendOperationMultiply(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('*  * ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
    clear()
}
function appendOperationClipClosed(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith(')  )  )  ) ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
}

function appendOperationClipOpen(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('(  (  (  ( ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
}

function appendOperationPoint(operation) {
    document.getElementById('resultArea').innerHTML +=operation;
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith('..')) {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }
}

function result() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
    all()
    if (container.innerHTML.endsWith('752009')) {
        document.getElementById('error').innerHTML = 'Du hast es geschaft!!!';
        window.setTimeout(function() {
            location.href = 'easteregg.html';
        })
    }
}

function resultDelete() {
    document.getElementById('resultArea').innerHTML = '';
    all()
}

function resultDeleteLast() {
    all()
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function all() {
    document.getElementById('error').innerHTML = '';
}

function clear() {
    let div = document.getElementById('resultArea');
    if (div.innerHTML.endsWith('/  * ')) {
        div.innerHTML = div.innerHTML.slice(0, -3)
        document.getElementById('error').innerHTML = 'Fehleingabe!!!'
    }

    let div_ = document.getElementById('resultArea');
    if (div_.innerHTML.endsWith('*  / ')) {
        div_.innerHTML = div_.innerHTML.slice(0, -3)
        document.getElementById('error').innerHTML = 'Fehleingabe!!!'
    }
}