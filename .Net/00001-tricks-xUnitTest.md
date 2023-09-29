## Table of content
* Make visible internal class to the Test Project
* Create Fixture Class



## Make visible internal class to the Test Project

[Example](https://www.youtube.com/watch?v=od6g3VMvQmo&list=RDCMUCo2T5CWtdbj4NveB5flTD4A&index=4&ab_channel=RainerStropek)

Add to file into *.dll

```csharp
using...

[assembly: InternalsVisibleTo("ProjectName.xUnitTest")]

public class MyClass{
  ...
}
```
## Create Fixture Class

This a class buided from for example json file. More info into example.
