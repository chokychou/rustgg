# A website for rustgo servers.

## Frontend
The frontend app includes static files.

The following steps let you run only the frontend app. ```cd ./rustgg/frontend``` <br />
Install dependencies ```npm install``` <br />
Update packages ```npm .``` <br />
Run react ```npm start``` <br />

## Backend
API calls and databases

The following steps let you run only the backend app. ```cd ./rustgg/backend``` <br />
Install dependencies ```pip install -r -requirements.txt``` <br />
Run django ```python3 manage.py runserver``` <br />

## Ngix
Load balancer, proxies


## Deployment
!! make sure to adding following secret files before compilation: .pub, .backend/.env, .backend/utils/credentials.py
