const object = document.getElementById('hoverObject');
const notice = document.getElementById('hoverNotice');

object.addEventListener('mouseover', function() {
    notice.style.display = 'block';
});

object.addEventListener('mouseout', function() {
    notice.style.display = 'none';
});