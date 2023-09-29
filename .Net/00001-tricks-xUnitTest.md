## Table of content
* Make visible internal class to the Test Project
* Create Fixture Class
* EditForm Validation
* Custom Validation



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

## EditForm Validation

[Link](https://learn.microsoft.com/en-us/aspnet/core/blazor/forms-and-input-components?view=aspnetcore-6.0)

## Custom Validation

```bash
    public class NotMinusOneAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is int intValue && intValue == -1)
                return new ValidationResult("Value cannot be -1");
            return ValidationResult.Success;
        }
    }

public class Model{

...

  [NotMinusOne(ErrorMessage = "Select id should be not -1")]
  public int Id { get; set; } = -1;
  public string Name { get; set; } = -1;  
...
}


...

  <div>Label:</div>
  <InputSelect @bind-Value="_model.Id">
      @foreach (var m in _model.ListOfModels)
      {
          <option value="@m.Id">@m.Id - @.Name</option>
      }
  </select>
  <ValidationMessage For="@(() => _model.Id)" />
</div>
```
