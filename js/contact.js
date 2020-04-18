/* eslint-disable no-unused-vars */
function get_data(elem) {
  if (elem.value === 'Order Problem') {
    document.querySelector('#contact-order-number').style.display = 'block';
  } else if (elem.value !== 'Order Problem') {
    document.querySelector('#contact-order-number').style.display = 'none';
  }
}
