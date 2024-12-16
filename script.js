document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        alert('คุณได้คลิกที่ ' + event.target.textContent);
    }
});
