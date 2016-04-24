# Usage: python trigenDT.py total_data outfile
# Will calculate the downtime of the trigen plant
# and return the start and end times of this
# will also show the totalSCE used during this period

import sys
import json

def writeToJson(json_file, data_array):
	jsonfile = open(json_file, 'w')
	json.dump(data_array, jsonfile)
	
	jsonfile.close()
	

def trigen_checker(fileName):
	with open(fileName) as jsonfile:
		data = json.load(jsonfile)
	# Will subtract this times the counter to show that their was an increase because
	# the trigen plant was down
	sceAvg = 299.16
	sceTotal = 0.0
	trigenOffline = False
	trigen_data = []
	counter = 0
	for line in data:
		
		# Trigen plant is offline
		if (float(line["Trigen"]) >= 0):
			counter += 1
			if (trigenOffline == False):
				trigenOffline = True
				startDate = int(line["Timestamp"])
				sceTotal += float(line["SCE"])
			else:
				sceTotal += float(line["SCE"])
		# Trigen plant came back online add data to the list
		elif (float(line["Trigen"]) < 0 and trigenOffline == True):
			trigenOffline = False
			endDate = int(line["Timestamp"])
			sceTotal -= (sceAvg * counter)
			counter = 0
			temp = {"startDate": startDate, "endDate": endDate, "sceTotal": sceTotal}
			trigen_data.append(temp)
			sceTotal = 0.0

	return trigen_data
			

def main(args):
	if len(args) == 2:
		print "Calculating Trigen Plant DownTime!!"
		data = trigen_checker(args[0])
		writeToJson(args[1], data)
	else:
		print "Incorrect Usage: python trigenDT.py total_data outfile"
		sys.exit(1)


if __name__ == "__main__":
	main(sys.argv[1:])
