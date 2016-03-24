# GE_CSUF

This is the sample code for using AngularJS to access our services locally (without pushing it onto Predix Platfrom).
The function is perfect with token automatically update by itself.

In order to test it on Chrome, you need to install this:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US

Author: Bowen Tian

I changed how the code was organized incase we need to add additional Controllers, Services, or Directives.  From what im understanding about Angularjs is that we should have a new service for every microservice that we use ex.(Postgres, analytics, asset). We should also have a different controller for each of these services.
I still don't know how to get the UAA token to pass with all the services.  In the reference app they use python to get the token so maybe we should try that.
Author: Joseph Porter
