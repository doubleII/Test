## Table of content
* What is a cURL
* Listening more than one URL
* GET
* POST
* cURL using file
* Measure request and response time an rest-api over cmd
* Make dump file

## What is a cURL

cURL is a free command line tool. It uses URL syntax to transafe data to and from server. cURL can be used for things like user authentification, HTTP post, SSL communication,<br/>
proxy support, FTP uploads and more.

cURL format:

```bash
curl [option] [url]
```
For more Info go to cURL [website](https://curl.se/docs/manpage.html)

## Listening more than one URL

...

```bash
curl -O http://url1.com -O http://url2.com
```
...
## GET
...
## POST
...
## cURL using file
...
## Measure request and response time an rest-api over cmd

...

```bash
curl -v --trace-time http://example.com
```

...

```bash
curl -w "\n\n%{time_connect} + %{time_starttransfer} = %{time_total}\n" www.google.com 
```

...

## Make dump file
...
