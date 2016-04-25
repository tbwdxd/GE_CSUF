
Http Tunnel Server Sample - Shows how to start the Http Tunnel Server using a script

A script is provided to start the application, in the script there is only one property to set
which is the port the server will be listening for http requests from the Http Tunnel Client.

To Run the Http Tunnel Server, modify the SERVER_PORT, KEYSTORE_FILE, and KEYSTORE_TYPE parameters in the
 tunnelServer script.

You will need to generate a container to have the Http Tunnel Client. Start the container configuring
destination.host property in the com.ge.dspmicro.httptunnel.client.cfg to have the servers host information
    ex: <Machine Running Http Tunnel Server IP>:<Server Port>

You will also need to create a truststore file and add the file location to the parameters.

When the Http Tunnel Client makes a connection to the server, a 'device.properties' file is
created in the in the current script directory device information. 
The Device information saved in the file are the different connections made to devices in the 
format <Device Name>|<Cloud Device ID>|<Protocol>=<Port Server Opens>
	ex Device_1|Cloud_ID|ssh=55420

The Device Name, Device ID, and the Protocol is information passed on by the Client. The Port the server opens
is to listen to connections to tunnel to the client.

The machine documentation provides information on how to configure the HttpTunnelClient.