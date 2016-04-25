PREDIX MACHINE 15.3 REQUIRES PREDIX MACHINE PRODUCT MANAGEMENT APPROVAL FOR ANY SOLUTION AND
CUSTOMER ENGAGEMENT WITH THE SOFTWARE. THIS VERSION IS ONLY APPROVED FOR INTERNAL USE INSIDE GE AND
REQUIRES COMMERCIAL LICENSING FOR ANY SOLUTION TO GO TO PRODUCTION.

TERMS OF USE: USE OF THIS SOFTWARE IS GOVERNED BY THE SOFTWARE LICENSING AND DISTRIBUTION AGREEMENT
STATED IN THE DOCUMENTS license/Predix_EULA.pdf (THESE DOCUMENTS ARE PART OF THIS
SOFTWARE PACKAGE). BY USING THIS SOFTWARE, YOU AGREE THAT YOUR USE OF THE SOFTWARE IS GOVERNED BY
LICENSING AND DISTRIBUTION AGREEMENT STATED IN THESE DOCUMENTS. IF YOU DO NOT FULLY AGREE WITH THE
TERMS OF THE AGREEMENTS, YOU ARE NOT AUTHORIZED TO USE THE SOFTWARE AND MUST REMOVE THE SOFTWARE
IMMEDIATELY.

Predix Machine is a lightweight kernel that can be deployed on various OSGi
containers. Predix Machine should be unzipped and placed in your software development workspace. 
      
Once the container is extracted, the scripts for launching it can be found in ./bin/ 

Additional README files can be found in sub folders. 

=====================================================================
Folder Structure
=====================================================================

/--
    /bin - contains startup scripts. start by running "predixmachine"
    
    /etc - bundle configuration and property files
    
    /logs - log files if file logging is setup
    
    /licence - legal documents
    
    /osgi- The ProSyst container
        /bundles - the ProSyst bundles
        /lib  - native libraries
        /bin/vms/
            boot.ini - list of ProSyst bundles and their start order.
            jdk/
                server or server.bat - ProSyst start script.
                /storage - framework runtime storage.  During a clean start, the contents of this folder will be deleted.
    
    /system/-- 
    
        /init - boot arguments and system properties 
    
        /jars - binary bundle jars for deployment in framework
        
        /security - setup bundle level security and key and trust stores


=====================================================================
Custom configuration
=====================================================================
      
The container startup sequence is defined in *.ini, located in ./system/init/. 

You can choose to not load certain modules, by removing them from the ini file, 
if your application does not require them. For example, if you don't 
need the TCP socket service or its protobuf library dependency, 
you can remove 
        <bundle>
            <name>../../system/jars/3rdparty/protobuf-java-2.5.0.jar</name>
        </bundle>
    