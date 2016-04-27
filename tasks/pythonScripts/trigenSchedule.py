# Usage: python trigenSchedule.py jsonInfile jsonOutfile
# This will calculate the best times to perform maintainence on the Trigen plant
# Will find best day for each month
# Author: Joseph Porter
# Written: 4/26/2016


import json
import sys
import datetime
import time

# Write the object to a json file
def writeToJson(json_file, data_array):
	jsonfile = open(json_file, 'w')
	json.dump(data_array, jsonfile)
	
	jsonfile.close()

# Will calculate the best time to perform maintanence on the trigen plant
# Will return the optimal times of each day (Mon, Tues ... etc) 
# of each month
def scheduler(fileName):
	with open(fileName) as jsonfile:
		data = json.load(jsonfile)

	# If value is above average then its not a good time to do maintenance
	sceAvg = 299.16
	monthData = []
	dayData = []
	betterDays = []

	# Counters
	counterLines = 0
 	counterMonth = 0
 	counterDay = 0

	# Start and end Times
	timeVarstart = []
	timeVarend = []

	# Initial Variables
	foundStart = False
	aDayWasBetter = False
	tempTime = time.strftime("%B %d, %Y %H:%M:%S", time.gmtime(int(data[0]["Timestamp"])))
	currDay = datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%A')
	currMonth = datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%B')

	# Loop through all entries
	for line in data:
		tempTime = time.strftime("%B %d, %Y %H:%M:%S", time.gmtime(int(line["Timestamp"])))
		month = datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%B')
		if (currMonth == month):
			day = datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%A')
			if (currDay == day):

				dayTime = datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%H')
			
				# Any time between the hours of 6am and 8pm
				if (int(dayTime) in range(6, 20)):
					if (float(line["SCE"]) <= sceAvg and foundStart == False):
						timeVarstart.append(datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%H:%M'))
						foundStart = True
					elif (float(line["SCE"]) > sceAvg and foundStart == True):
						timeVarend.append(datetime.datetime.strptime(tempTime, '%B %d, %Y %H:%M:%S').strftime('%H:%M'))
						foundStart = False
			else:
				dayIsIn = False
				foundStart = False
				for item in dayData:
					if (item["name"] == currDay):
						dayIsIn = True
						counterDay += 1

						# Check to see if this day is more optimal then the previous time
						for data_item in timeVarstart:
							hour = datetime.datetime.strptime(data_item, '%H:%M').strftime('%H')
							minute = datetime.datetime.strptime(data_item, '%H:%M').strftime('%M')

							# If the currentOptimized day has no data then give it some
							if (item["bestStarts"] == [] or item["bestEnds"] == []):
								item["bestStarts"] = timeVarstart
								item["bestEnds"] = timeVarend
								aDayWasBetter = True
								break
							if (int(hour) < int(datetime.datetime.strptime(item["bestStarts"][0], '%H:%M').strftime('%H')) and int(minute) < int(datetime.datetime.strptime(item["bestStarts"][0], '%H:%M').strftime('%M'))):
								aDayWasBetter = True
							if (int(hour) > int(datetime.datetime.strptime(item["bestEnds"][0], '%H:%M').strftime('%H')) and int(minute) > int(datetime.datetime.strptime(item["bestEnds"][0], '%H:%M').strftime('%M'))):
								aDayWasBetter = True
							if (aDayWasBetter == True):
								item["bestStarts"] = timeVarstart
								item["bestEnds"] = timeVarend
								betterDays.append(currDay)
							

				# Day already exits see if this day is better
				if (dayIsIn == False):
					temp = {"name": currDay, "bestStarts": timeVarstart, "bestEnds": timeVarend}
					dayData.append(temp)

				# Move to the next day
				currDay = day

				timeVarstart = []
				timeVarend = []
		else:
			monthIsIn = False
			for item in monthData:
				if (item["name"] == currMonth):
					monthIsIn = True
					counterMonth += 1

					# If a day this month was better reset 
					if (aDayWasBetter == True):
						item["days"] = dayData

			# Month already exits see if this Month is better
			if (monthIsIn == False):
				temp = {"name": currMonth, "days": dayData}
				monthData.append(temp)


			# Switch to this next month
			aDayWasBetter = False
			dayData = []
			currMonth = month

		# Count the lines
		counterLines += 1

	print monthData
	print "Total Lines of data calculated %d" %(counterLines)
	print "Times into month function %d" %(counterMonth)
	print "Times into day function %d" %(counterDay)

	return monthData
					
					


def main(args):
	if len(args) == 2:
		print "Calculating Trigen Maintenince schedule PLEASE WAIT!!"
		data = scheduler(args[0])
		print "Writting to file %s" %(args[1])
		writeToJson(args[1], data)
	else:
		print "Incorrect Usage: python trigenDT.py total_data outfile"
		sys.exit(1)


if __name__ == "__main__":
	main(sys.argv[1:])
	
