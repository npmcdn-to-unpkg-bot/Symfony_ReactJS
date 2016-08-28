// Get request creation, in order to be effective, the request ask for GET response only.

var data = new XMLHttpRequest();
data.open("GET", "http://localhost/projets/symfony/ReactJS/React/web/app_dev.php/api/articles/get", false);
data.send(null);
console.log(data.responseText);