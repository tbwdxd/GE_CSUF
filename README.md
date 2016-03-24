# GE_CSUF

This is the sample code for using Angular_JS to access our services.
The function is not perfect, since it is not update the token every 12 hours.

In order to test it on Chrome, you need to install this:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US

Author: Bowen Tian

I changed how the code was organized incase we need to add additional Controllers, Services, or Directives.  From what im understanding about Angularjs is that we should have a new service for every microservice that we use ex.(Postgres, analytics, asset). We should also have a different controller for each of these services.
I still don't know how to get the UAA token to pass with all the services.  In the reference app they use python to get the token so maybe we should try that.
Author: Joseph Porter
