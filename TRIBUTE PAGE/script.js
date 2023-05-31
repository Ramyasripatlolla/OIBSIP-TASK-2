window.addEventListener('DOMContentLoaded', function () {
    var nameElement = document.getElementById('name');
    var descriptionElement = document.getElementById('description');

    // Replace these values with the person's actual name and description
    var personName = 'A.P.J Abdul Kalam';
    var personDescription = 'BIOGRAPHY.';

    nameElement.textContent = personName;
    descriptionElement.textContent = personDescription;
});