import json

fpt = open('/home/owner/Downloads/data.json')
data = json.load(fpt)
#print (data)

def get_checkin_at_time(data, start_time):
    coords = []
    for buz_id in data:
        for timestamp in data[buz_id]['checkin_data']['checkin_info']:
            hour = int(timestamp[:-2])
            if hour == start_time:
                count = int(data[buz_id]['checkin_data']['checkin_info'][timestamp])
                longitude = data[buz_id]['bus_data']['longitude']
                latitude = data[buz_id]['bus_data']['latitude']
                latobj = [longitude, latitude]
                for i in range(count):
                    coords.append(latobj)
    return coords
    
json_data = {}
for t in range(24):
    coords = get_checkin_at_time(data, t)
    json_data[t] = coords
    
print (json_data)

with open('lat_long.json', 'w') as fp:
    json.dump(json_data, fp)
    
