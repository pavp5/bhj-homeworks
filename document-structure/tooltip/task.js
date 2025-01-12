const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.insertAdjacentElement('afterbegin', tooltip);

Array.from(document.querySelectorAll('.has-tooltip')).forEach(el => { el.addEventListener('click', clickLink) })

function clickLink(e) {
    e.preventDefault();
    const title = e.target.getAttribute('title');
    if (title !== tooltip.innerText || !tooltip.classList.contains('tooltip_active')) {
        tooltip.innerText = title;
        const { left, bottom } = e.target.getBoundingClientRect();        
        tooltip.style.left = left + 'px';
        tooltip.style.top = bottom + 'px';
        tooltip.classList.add('tooltip_active');
    } else {
        tooltip.classList.remove('tooltip_active');
    }



}