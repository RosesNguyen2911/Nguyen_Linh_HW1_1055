console.log("JS file connected");

const icons = document.querySelectorAll('.icon');

function iconLogId() {
    console.log(`You clicked on the "${this.id}" icon.`);
}

icons.forEach(function (icon) {
    icon.addEventListener('click', iconLogId);
});
