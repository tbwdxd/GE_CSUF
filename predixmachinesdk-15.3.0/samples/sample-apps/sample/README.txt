

Top level project contains samples for the Machine product.

===================================================================================================
Folder Structure
===================================================================================================

/--
	/etc - Configuration files for some of the samples.
	/osgi/bin/vms/solution.ini - sample solution.ini that includes all the samples.
	
    /sample-basicmachineadapter - Implements IMachineAdapter interface and shows how to develop a 
        basic machine adapter. 
    
	/sample-configuration - Shows how to use Meta Mapping for files with configuration files.
	
	/sample-datariver-receive - Shows how to use DataRiver Receive service to receive a file from a DataRiver Send service.
	
	/sample-datariver-receivehandler - Shows how to setup custom handling of content received by DataRiver Receive service.
	
	/sample-datariver-send - Shows how to use DataRiver Send service to send a file to a listening DataRiver Receive service.
	
	/sample-gitrepository - Git Repository Sample facilitates the use of JGit.
	
    /sample-healthmachineadapter - Demonstrate receiving data from health monitor adapter.
    
	/sample-hoover - Shows how to implement a Processor to manipulate data and then send it to the data river.
	
	/sample-httpclient - Shows how to use the HTTP Client service to change the default configuration settings.
	                     Requires keystores and truststores to be configured. See section below for the
	                     /system/security folder.
	
    /sample-httpriver - Shows how to use Http river service to send data to the cloud. See Sample-cloud.apps.zip.
    
    /sample-management - Shows how to use SAML Server configured in STS Client for the authentication of users.

    /sample-mqttclient - Show how to use MQTT client to publish a message and subscribe to a topic.    

    /sample-security - Shows how to use the SecurityAdmin service to encrypt and decrypt a string containing senstaive information.
    
    /sample-storeforwardclient - Shows how to use the StoreForward service to pass the data through a persistence queue after 
                            receiving from source and before sending it to it's destination.
    
	/sample-subscriptionmachineadapter - Implements ISubscriptionMachineAdapter interface and shows
		how to develop subscription functionality of machine adapter.
	
    /sample-websocketclient - Shows how to use the wsclient service connect to a public websocket endpoint.    
    
    /sample-websocketserver - Creates a local web socket server for the sample-websocketclient.    
    
    /sample-websocketriver - Shows how to use websocket river service to send data to the cloud over websockets.  
    
	/system/--
		
		/security - Security Config Files, this also containers the flag to enable HTTP. If you are running a sample
		            that requires keys setup in keystore/truststore (sample-httpclient) you must copy all of the contents
		            of this folder into your running container. 


To build all samples: 
Make sure your environment has the following components installed and setup properly before building the samples. 
Please refer to Predix Machine Getting Started Guide and Developers Guide for details on how to setup your
development environment.  Make sure you have access to the maven repository: https://artifactory.predix.io/artifactory/PREDIX-EXT

You will need to update your maven settings.xml to include the username/password. You must edit the .m2/settings.xml file.
        
        1. Login into https://artifactory.predix.io
        2. Under profile generate a API Key
    
        Add an entry into the settings.xml with this information:
        <server>
            <id>artifactory.external</id>
            <username>predix cloud login</username>
            <password>{encrypted password - API key}</password>
        </server>

To build samples from the command line:
	navigate to		<Predix-Machine>/sample-apps directory 
	run				'mvn clean install' 
	
To build individual samples: 
	navigate to		<Predix-Machine>/sample-apps/<sample-name>
	run				'mvn clean install'

To run a sample:
	Make sure the project is build
	Copy the com.ge.dspmicro.{sample-name}-{version}.jar 
		from 	<Predix-Machine>/sample-apps/<sample-name>/target/
		to 		<Predix-Machine>/system/jars/solution/
		
	Copy any configuration files needed by the sample
		from	<Predix-Machine>/sample-apps/config/
		to 		<Predix-Machine>/etc/
	
	Modify the solution.ini file by adding a <bundle> tag for each sample in the folowing format
		<bundle>
			<name>../../system/jars/solution/com.ge.dspmicro.{sample-name}-{version}.jar </name>
		</bundle>
	Or you can copy and paste the existing solution.ini file for all samples and modify that file.
		solutions.ini file is located in  <Predix-Machine>/sample-apps/osgi/bin/vms/
		
	 Run container:
	 	Navigate to		<Predix-Machine>/bin/
	 	Run commmand	./predixmachine clean     (predixmachine.bat clean - for Windows)

NOTE: Some samples may need more configuration not mentioned here. Please refer to the individual
sample README's for additional instructions.

To build samples using eclipse IDE:

We recommend that you use Eclipse JEE version as IDE for your solution development.  
Please connect to http://www.eclipse.org/downloads/ for detail information on how to download. 
Install the Predix SDK into the Eclipse (Follow the InstallationGuide.pdf)
To explore and get a hands on these samples:

	1.  Launch Eclipse and create your own workspace.
	2.  Import samples by select: File->Import->Maven->Existing Maven Projects, click "Next"
	3.  Browse and select "<Predix-Machine>/sample-apps" as root folder
	4.  Click "Finish" to finish importing all samples into your workspace.
	5.  Select the sample-apps, select "Run->Run As->Maven Install"
	6.  Add the maven project into a Predix SDK image editor.
	7.  Add any configuration files in the image editor.
	8.  Export and run the container.
	

	

