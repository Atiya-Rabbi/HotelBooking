# HotelBooking

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/Atiya-Rabbi/HotelBooking.git
$ cd HotelBooking
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ python -m venv env
$ source env/bin/activate
```

Then install the dependencies:

```sh
(env)$ cd AroBookings
(env)$ pip install -r requirements.txt
```
Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment.

Once `pip` has finished downloading the dependencies:
```sh
(env)$ python manage.py runserver
```
And navigate to `http://localhost:8000/admin/`.

In order to view the database, fill in the admin details
username: admin
password: arobookings

To view the api navigate to http://localhost:8000/api/hotel/?city=dublin
![Screenshot from 2022-10-02 11-34-29](https://user-images.githubusercontent.com/31544068/193440472-6942a181-2e26-49a5-b036-b4d779ad66ec.png)

## Tests

To run the tests, `cd` into the directory where `manage.py` is:

```sh
(env)$ ./manage.py test
```

## Frontend

Open a new terminal
```sh
$ cd HotelBooking/bookingfrontend
$ npm start
```sh

And navigate to http://localhost:3000/

![Screenshot from 2022-10-02 11-38-28](https://user-images.githubusercontent.com/31544068/193440553-aafec0c2-7ed2-42e7-b4c3-6a41ba6e8c63.png)

![Screenshot from 2022-10-02 11-40-01](https://user-images.githubusercontent.com/31544068/193440625-5a809175-462c-430c-994f-e52e38dcdd83.png)
