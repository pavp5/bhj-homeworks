const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.insertAdjacentElement('afterbegin', tooltip);

Array.from(document.querySelectorAll('.has-tooltip')).forEach(el => { el.addEventListener('click', clickLink) })

function clickLink(e) {
    e.preventDefault();
    tooltip.classList.remove('tooltip_active');
    const title = e.target.getAttribute('title');
    if (title !== tooltip.innerText) {
        tooltip.innerText = title;
        const { left, bottom } = e.target.getBoundingClientRect();
        tooltip.classList.add('tooltip_active');
        tooltip.style.left = left + 'px';
        tooltip.style.top = bottom + 'px';

        // alert(left);
    }



}