## Table of content
* What is a cURL
* Common options
* Listening more than one URL
* GET
* POST & PUT requests
* POST & PUT requests, using json body in file
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

## Common options

`-d --data` Send body (specific data) in POST or PUT request. More details provids in section `PUT & POST requests`

`-h --help` Usage help.

`-H --header Header to supply with post & put request`

`-i --include` (HTTP) Include the HTTP-header in the output. The HTTP-header includes things like server-name, date of the document, HTTP-version and more...

`-v --verbose` Provide more information, makes the fetching more verbose. Useful for debuggung. A line starting with `>` means "header data" sent by curl, `<` means "header data" received by curl that is hidden in normal cases, and a line starting with `*` means additional info provided by curl.

... in arbeit

## Listening more than one URL

```bash
curl -O http://url1.com -O http://url2.com
```
...in arbeit

## GET

Request specific resource from the server. Get just the url.

Test with reqres.in fake api.

```code 
curl https://reqres.in/api/users/2
```

## POST & PUT requests

For sending data with POST and PUT requiest, are some common cURL options:
* `-X POST`
* `-X PUT`

content type for header:
* `-H "content-Type: application/json"`
*  `-H "Authorisation: Bearer 23sdfSDS3232.."` add your token here.

body with json parameter:
* `-d "{'key1':'value1', 'key2':'value2'}"`
* depends from OS can work this example better `-d '{"key1":"value1", "key2":"value2"}'`

body with file:
* `--data @file.json`

url with parameters:
* `-d "param1=value1&param2)value2"`

Your Rest-Api C#
```c#
[HttpPut]
[Route("api/update/{value}")]
public IHttpActionResult Put([FromBody] JObject obj) => Ok(obj);
```

To test your rest-api using cURL command try this:

```bash
curl -X PUT -H "Content-Type: application/json" -d "{'key1':'value1', 'key2':'value2'}" https://localhost:1234/api/update/jsonvalue
```

## POST & PUT requests, using json body in file

If you have a large body you can put the all body into a some file. 

Run the cmd into the file directory. You don't need to add the path to the file, if you run the cmd into the file directory.

```bash
curl -X POST --data @file.json -H "Content-type:application/json" http://127.0.0/api/../
```

```bash
curl -X PUT --data @file.json -H "Content-type:application/json" http://127.0.0/api/../
```

## Measure request and response time an rest-api over cmd with cURL

...in abreit

```bash
curl -v --trace-time http://example.com
```

Measure GET methode:

```bash
curl -w "\n\n%{time_connect} + %{time_starttransfer} = %{time_total}\n" www.google.com 
```

Measure POST methode with body:

`curl -X POST -d @file server:port -w %{time_connect}:%{time_starttransfer}:%{time_total} http://127.0.0/api/../`

## Make dump file
...in arbeit
