#!/usr/bin/python

#usage: python averages.py file.json outfile.json
# Will return the average 
# Author: Joseph Porter
'''
	This script will return the averages of the complete Solar data
	and save it into average.json in public/sample-data/
	It will return all averages by default
'''

import sys
import json
from pprint import pprint

#Accepts a json file and returns the averages of Solar, Trigen, SCE in a dictionary
def averages(fileName):
    solarAvg = 0.0
    trigenAvg = 0.0
    sceAvg = 0.0
    counter = 0.0
    errorcounter = 0
    with open(fileName) as jsonfile:
        data = json.load(jsonfile)
    for data_item in data:
        try:
            solarAvg += float(data_item["Solar"])
            trigenAvg += float(data_item["Trigen"])
            sceAvg += float(data_item["SCE"])
        except ValueError:
            print "Line %d is incorrect format" %(counter+1)
            errorcounter += 1
        counter += 1.0
        
    solarAvg = solarAvg / float(counter)
    trigenAvg = trigenAvg / float(counter)
    sceAvg = sceAvg / float(counter)
    print "Total Number of lines %d, Total number of errors: %d" %(counter, errorcounter)
    print "All the averages Solar: %f Trigen: %f SCE: %f" %(solarAvg, trigenAvg, sceAvg)
    data = {"SolarAvg": solarAvg, "trigenAvg": trigenAvg, "sceAvg": sceAvg}
    return data

# Write the dictionary to a json file
def write_json(fileName, dict_data):
    jsonfile = open(fileName, 'w')
    json.dump(dict_data, jsonfile)

#Main
def main(argv):
    if len(argv) == 2:
        avgDict = averages(argv[0])
        write_json(argv[1], avgDict)
        print "Placed averages into %s" %(argv[1])
    else:
        print "Invalid!! Usage: python averages.py json_file outfile_name.json"


# Start execution here
if __name__ == "__main__":
	main(sys.argv[1:])
