## Table of content
* Make visible internal class to the Test Project



## Make visible internal class to the Test Project

Add to file into *.dll

```csharp
using...

[assembly: InternalsVisibleTo("ProjectName.xUnitTest")]

public class MyClass{
  ...
}
```
