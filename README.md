# django-and-react-shopping

REACT
    npx create-react-app frontend
    npm start
    npm install redux
    npm install redux react-redux redux-thunk redux-devtools-extension
    usando extensao (ES7 React/Redux/GraphQL/React-Native snippets) para realizar certos comandos de snipet como
        rfce para formar um component
        imd para realizar um importe

PYTHON
    python -m venv venv
    cd backend\venv\Scripts
    activate

    pip install django
    pip install djangorestframework
    pip install pillow
    pip install django-cors-headers

    django-admin startproject backend

    python manage.py startapp base          create aplication
    python manage.py makemigrations         apply migrations
    python manage.py makemigrations base    force makemigrations in the project
    python manage.py migrate                need to run when maked alterations in database
    python manage.py runserver              run server
    python manage.py createsuperuser        create super user
    python manage.py flush                  resset database
    python manage.py collectstatic          create static files folder