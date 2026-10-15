const buttons = document.querySelectorAll('.quiz button');
const result = document.querySelector('#result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Creamy') {
            result.textContent = 'Try pur Classic taro!';
        } else if (button.textContent === 'Light') {
            result.textContent = 'Try our Taro with coconut!';
        } else {
            result.textContent = 'Try our Taro and matcha!'
        }
    });
});

const form =  document.querySelector('#booking-form');
const confirmation = document.querySelector('#confirmation');

if (form) {
    form.addEventListener('submit', Event => {
        Event.preventDefault();
        const name = document.querySelector('#name').ariaValueMax;
        confirmation.textContent = `Thanks, ${name}! We got your booking.`;
        form.reset();
    });
}