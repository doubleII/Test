## Table of content
* Information
* Create Project using cmd
* Test


## Information


List sdks:

```bash
dotnet --list-sdks
```

List runtimes:

```bash
dotnet --list-runtimes
```

## Create Project using cmd

Create Solution 

```bash
dotnet new sln -o <solution name>
```

Open the cmd into the Solution folder and type it

[dotnet commands](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new)

```bash
dotnet new console -o <console app name>
```

## Test

[test-commands](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test)

Run test using cmd. 
Open the cmd window into the project folder

Show all details. You can change the log-file type (txt, log, html...)

```bash
dotnet test --verbosity:diagnostic --diag:log.txt
```

Run the tests in the project in the current directory, and log with the html logger to testResults.html in the TestResults folder:

```bash
dotnet test --logger "html;logfilename=testResults.html"
```
