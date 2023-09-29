## Table of content
* Add parameters
* Add options

## Add parameters

```csharp
@page "/alert"
@inject IJSRuntime JSRuntime

<div class="container-alert" tabindex="-1">
    <div class="box-alert-1">
        <button type="button" class="btn btn-secondary" @onclick="OnClose">Close</button>
    </div>
</div>

@code{
    [Parameter] public string? Message { get; set; }
    private async Task OnClose()
    {

        string command = "CREEXEC -R 0032_UIClose";
        await JSRuntime.InvokeAsync<string>("CommandLineClick", command);
    }

}
```

```csharp
      protected override async Task OnInitializedAsync()
      {
          ...
          var modalParameters = new ModalParameters();
          modalParameters.Add(nameof(Alert.Message), "this is a message.");
    
          ModalService.Show<Alert>("Modal Window Title.", modalParameters, options);
          return;
          ...
    }
```
