import json
import os
import random
import requests

from datetime import date, datetime, time, timedelta

cur_date = date.today() + timedelta(days=1)
end_date = cur_date + timedelta(days=7)

token = os.environ.get('TOKEN', '')
api_host = os.environ.get('API_HOST', 'http://localhost:1337')

movies_res = requests.get(api_host + '/api/movies')
movies_data = movies_res.json()
movie_ids = list(map(lambda m: m['id'], movies_data['data']))

while cur_date < end_date:
    start_times = (
        datetime.combine(cur_date, time(12, 0)),
        datetime.combine(cur_date, time(17, 0)),
        datetime.combine(cur_date, time(19, 0)),
        datetime.combine(cur_date, time(21, 0)),
    )

    for start_time in start_times:
        print('Creating %s' % start_time.isoformat())
        res = requests.post(api_host + '/api/screenings', data=json.dumps({
            'data': {
                'room': 'Stora salongen',
                'movie': random.choice(movie_ids),
                'start_time': start_time.isoformat(),
            }
        }), headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        })

    cur_date += timedelta(days=1)
