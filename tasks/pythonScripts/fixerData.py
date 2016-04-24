# Used to fix the data
# The Data has blank spots in it which will cause all the functions to not perform correctly
# this will take the average of all the values and randomly assign the blank spots a new value
# based off of this value
# Author: Joseph Porter

import sys
import json
import random

# With this function you will have to add '[' and ']' at the beggining and end as well as remove ',' at last entry
def write_json(fileName, jsonStuff):
	jsonfile = open(fileName, 'w')
	for line in jsonStuff:
		json.dump(line, jsonfile)
		jsonfile.write(",\n")

	jsonfile.close()

def checker(jsonFile):
	
	# Total Averages for each
	sceAvg = 299.16
	trigenAvg = -916.76
	solarAvg = 47.99
	with open(jsonFile) as jsonfile:
        	data = json.load(jsonfile)

	# Fixing the data 
	for data_item in data:
		rNum = random.randint(-20, 20)
		if data_item["SCE"] == "":
			data_item["SCE"] = str(sceAvg + rNum)
		if data_item["Trigen"] == "":
			data_item["Trigen"] = str(trigenAvg + rNum)

		if float(data_item["SCE"]) > 10000.00:
			data_item["SCE"] = str(sceAvg + rNum)

		if float(data_item["Trigen"]) < -2000.00 or float(data_item["Trigen"]) > 2000.00:
			data_item["Trigen"] = str(trigenAvg + rNum)

	write_json("stuff.json", data)
		

if __name__ == "__main__":
	checker(sys.argv[1])
	
