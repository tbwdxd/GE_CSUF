#!/usr/bin/python

#usage ./cleaner.py file.csv
#will process comma dilimited files (*.csv) into json files
#Author: Joseph Porter

# This is a problem need to fix
# Need to delete ',' at end of json file will be fixed later

import sys
import json
import csv


#Convert Comma delimited (*.csv) file into json
def loadComma(file_Name):
	csvfile = open(file_Name, 'r')
	jsonfile = open('../../public/sample-data/completeData.json', 'w')
	fieldnames = ("Timestamp", "Trigen", "SCE", "Solar")
	reader = csv.DictReader( csvfile, fieldnames)
	
	jsonfile.write('[')
	for row in reader:
		json.dump(row, jsonfile)
		jsonfile.write(',\n')
	jsonfile.write(']')

	jsonfile.close()
	csvfile.close()


#Main
def main(argv):
	if len(argv) != 1:
		print("Incorrect Usage: ./cleaner.py file_name.csv")
		sys.exit(0)
	else:
		loadComma(argv[0])
		



if __name__ == "__main__":
	main(sys.argv[1:])


