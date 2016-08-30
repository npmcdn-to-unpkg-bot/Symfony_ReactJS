// Get request creation, in order to be effective, the request ask for GET response only.

$.get('http://localhost/projets/symfony/ReactJS/React/web/app_dev.php/api/articles/get', function (data) {
    console.log(data);
});