@echo off

rem  Copyright (c) 2012-2014 General Electric Company. All rights reserved.
rem  The copyright to the computer software herein is the property of
rem  General Electric Company. The software may be used and/or copied only
rem  with the written permission of General Electric Company or in accordance
rem  with the terms and conditions stipulated in the agreement/contract
rem  under which the software has been supplied

rem Set NDDS_LIBRARY_PATH
rem If environment variable NDDS_LIBRARY_PATH is not defined, set it to default location
if not defined NDDS_LIBRARY_PATH set NDDS_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\ndds\x64Win64jdk

rem Set OPENSSL_LIBRARY_PATH
rem If environment variable OPENSSL_LIBRARY_PATH is not defined, set it to default location
if not defined OPENSSL_LIBRARY_PATH set OPENSSL_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\openssl\x64Win64VS2010\bin

rem Set ROUTING_SERVICE_LIBRARY_PATH
rem If environment variable ROUTING_SERVICE_LIBRARY_PATH is not defined, set it to default location
if not defined ROUTING_SERVICE_LIBRARY_PATH set ROUTING_SERVICE_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\routingservice\x64Win64VS2010

rem Set TCP_LIBRARY_PATH
rem If environment variable TCP_LIBRARY_PATH is not defined, set it to default location
if not defined TCP_LIBRARY_PATH set TCP_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\tcp\x64Win64VS2010

rem Set TLS_LIBRARY_PATH
rem If environment variable TLS_LIBRARY_PATH is not defined, set it to default location
if not defined TLS_LIBRARY_PATH set TLS_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\tls\x64Win64VS2010

rem Set DTLS_LIBRARY_PATH
rem If environment variable DTLS_LIBRARY_PATH is not defined, set it to default location
if not defined DTLS_LIBRARY_PATH set DTLS_LIBRARY_PATH=%PREDIX_MACHINE_HOME%\lib\dtls\x64Win64VS2010


rem Add RTI paths to PATH
set PATH=%NDDS_LIBRARY_PATH%;%OPENSSL_LIBRARY_PATH%;%ROUTING_SERVICE_LIBRARY_PATH%;%TCP_LIBRARY_PATH%;%TLS_LIBRARY_PATH%;%DTLS_LIBRARY_PATH%;%PATH%
echo "Dynamic library path: %PATH%"