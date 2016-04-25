
cloud-device-config app provides REST apis for uploading and downloading device configurations to/from a Git repository.

==========
Steps to setup cloud-device-config app
1. Setup a Git repo and have THE following Git information ready:
   a. Git repo URI. 
   b. Git password.
   c. Git user name. 
   d. Add a folder to the repo for storing the device configs, e.g. device-configs
2. Setup an UAA account and have the following UAA information ready:
   a. UAA check token URL.
   b. UAA access token URL.
   c. UAA client id.
   d. UAA client secret.
3. Update the manifest.yml file
   a. Fill in the environment variables with the information collected from step 1 and 2. 
   b. Change the application properties if you want, e.g. name, memory, etc.
   c. See the sample manifest.yml at the end for more details.
4. Deploy the application
   a. From a command line, cd to sample/cloud-device-config folder
   b. Run cloud foundry command: cf push
   c. You should have the application url which can be used to setup device to cloud connection.

===========
Steps to setup Predix-ready Field Agent
1. Select the technician console feature while preparing the field agent.
2. Update the Predix identity configurations: etc/com.ge.dspmicro.predixcloud.identity.cfg
   a. Set com.ge.dspmicro.predixcloud.identity.uaa.token.url with value from step 2.b above
   b. Set com.ge.dspmicro.predixcloud.identity.uaa.clientid with value from step 2.c above
   c. Set com.ge.dspmicro.predixcloud.identity.uaa.clientsecret with value from step 2.d above
3. Update the technician console configuration: etc/com.ge.dspmicro.webconsole.techconsole.cfg
   a. Set com.ge.dspmicro.webconsole.techconsole.deviceid with an id, e.g. device123
   b. Set com.ge.dspmicro.webconsole.techconsole.predix.cloud.upload.url with value from step 4.c above
   
===========
Testing 
1. Start the Predix-ready Field Agent
2. Open a browser at https://agent_ip/system/console
3. Login to the webconsole and click Technician Console -> Configuration
4. In the Configuration Folders list panel, click the "Uploads all folders to cloud service" button
5. Check the Git repo/device-configs folder, and you should see a folder same as the device id and 
   a zip file "configs.zip" is located inside that folder.

============    
Sample manifest.yml:

# this is a minimal manifest
applications:
- name: sample-device-config
  memory: 512M
  instance: 1
  host: sample-device-config
  path: ./target/cf-device-config-service-15.3.0.jar

env:
  SPRING_PROFILES_ACTIVE: cloud
  git_repo_local_folder: GitRepositories
  git_repo_root: sample/device-configs (this folder must exist in the git repo)
  git_repo_uri: https://github.build.ge.com/PredixMachine/fcs-services-gumf-templates
  git_repo_username: XXXXX
  git_repo_password: XXXXX
  checkTokenEndpointUrl: https://UAA_SERVER/check_token
  accessTokenEndpointUrl: https://UAA_SERVER/oauth/token
  adminUserName: UAA_USER
  clientId: UAA_CLIENT_ID
  clientSecret: XXXXX