

This folder contains two files:
	solution.ini - 		This file is copied into the container to load the bundles listed.
		
	samplelist.txt -	This file contains a list of samples to be tested. 
	
To change the samples tested, modify the sampleslist.txt as well as the solution.ini file.
For example, if you choose to not test the gitrepository sample:
	
	from sampleslist.txt, remove:
		gitrepository
		
	And from solution.ini, remove:
		<bundle>
			<name>../../system/jars/solution/com.ge.dspmicro.sample-gitrepository-15.3.0.jar</name>
		</bundle>
		
		
NOTE: the sample-management is not in the list of auto test because it requires removing the current user authentication bundles.