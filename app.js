onload = () => {
    const elements = Array.from(document.querySelectorAll('*')).reverse();
    const tip = document.getElementById("tip");
    onmousemove = (e) => {
        tip.style.left = e.clientX + 'px';
        tip.style.top = e.clientY + 'px';
    }
    for (let element of elements) {
        if (element === document.getElementsByTagName('html')[0])
            return;
        element.addEventListener('mouseover', () => {
            if (element.hasAttribute('info')) {
                tip.innerText = element.getAttribute('info');
                tip.style.opacity = '1';
                return;
            } else {
                if (element.parentElement?.hasAttribute('info')) {
                    tip.innerText = element.parentElement.getAttribute('info');
                    tip.style.opacity = '1';
                    return;
                }
            }
        });
        element.addEventListener('mouseleave', () => {
            if (element.hasAttribute('info')) {
                tip.style.opacity = '0';
                return;
            } else {
                if (element.parentElement?.hasAttribute('info')) {
                    tip.style.opacity = '0';
                    return;
                }
            }
        })
    }

}

