# ReactJS into Symfony !

Here it's the source code of the developpez.com tutorial about using ReactJS into Symfony 3, in order to use it like it need to be used, follow this simple step :

## Install everything with Composer : 

```bash
php composer.phar install
```

or 

```bash
composer install
```

## Node JS Installation

Once everything is installed, let's bring the dependencies to life : 

```bash
npm install 
```

In order to build the "dynamic" part of the application, we use Webpack and ReactJS, every files isn't include in this repository and you need to transpile with Babel in order to perform better JS code, here's the command :

```bash
npm build
```

This command gonna build the principal files and copy them into the web/js/app, in order to use them into your views, be sure ton call the asset() method from Twig : 

```bash
{% block javascripts %}
   <!-- Global JS -->
   <script src="{{ asset('js/app/request.js') }}"></script>
   <script src="{{ asset('js/app/global.js') }}"></script>
{% endblock %}
```

Here, the request.js file is used only for checking that the Ajax request is ready and functional.

## Next step 

With all the files in check and the dependencies installed, it's time to launch something, to do this, two options are available :

- Use the PHP Server :

```bash
php bin/console server:run
```

- Use Wamp, Mamp, Xamp.