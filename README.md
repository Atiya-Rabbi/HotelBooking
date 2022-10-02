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

##Frontend
Open a new terminal
$ cd HotelBooking/bookingfrontend
$ npm start

And navigate to http://localhost:3000/
## Walkthrough

## Tests

To run the tests, `cd` into the directory where `manage.py` is:
```sh
(env)$ python manage.py test gc_app
```
