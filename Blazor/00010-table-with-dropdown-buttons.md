## Table of content
* what is a split button
* what is a dropdown button
* code snipped

## What is a split button

A split button is a hybrid between a button and a menu: it groups related commands together into a dropdown, but also offers one-click access to a default choice that doesn’t require opening the menu.
A split button is more complex.

## Dropdown button

Dropdowns are toggleable, contextual overlays (context menu) for displaying lists of links and more actions.

## Code snipped dropdown button in table

```cshtml
@using System.Collections.Generic

<h3>Item Table with Buttons and Dropdown Menu</h3>

<h3>TestComponent</h3>

<table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        @foreach (var item in items)
        {
            <tr>
                <td>@item.Id</td>
                <td>@item.Name</td>
                <td>@item.Status</td>
                <td>
                    @*<div class="dropdown" @onmouseover="() => ToggleDropdown(item, true)" @onmouseout="() => ToggleDropdown(item, false)">*@
                    <div class="dropdown" @onmouseout="() => ToggleDropdown(item, false)">
                        <button class="btn btn-secondary dropdown-toggle" @onclick="(() => ToggleDropdown(item, !item.IsDropdownOpen))">
                            Actions
                        </button>
                        <div class="@GetDropdownClass(item)">
                            <button class="dropdown-item" @onclick="() => EditItem(item)">Edit From Context Menu</button>
                            <!-- Add more dropdown items as needed -->
                            <button class="dropdown-item" @onclick="() => DeleteItem(item)">Delete From Context Menu</button>
                        </div>
                    </div>
                </td>
            </tr>
        }
    </tbody>>
</table>

@code {

    List<Item> items = new List<Item>
    {
        new Item { Id = 1, Name = "Item 1 Name", Status = "Active Status" , IsDropdownOpen = false },
        new Item { Id = 2, Name = "Item 2 Name", Status = "Inactive Status" , IsDropdownOpen = false },
        new Item { Id = 3, Name = "Item 3 Name", Status = "Active Status" , IsDropdownOpen = false }
    };

    bool isDropdownOpen = false;
    string dropdownClass = "dropdown-menu";

    void ToggleDropdown(Item item, bool isOpen)
    {
        item.IsDropdownOpen = isOpen;
    }

    string GetDropdownClass(Item item)
    {
        return item.IsDropdownOpen ? "dropdown-menu show" : "dropdown-menu";
    }

    void EditItem(Item item)
    {
        // Implement edit logic here
        Console.WriteLine($"Edit id: {item.Id}, Name: {item.Name}, Status: {item.Status}");
        isDropdownOpen = !isDropdownOpen;
    }

    void DeleteItem(Item item)
    {
        // Implement delete logic here
        Console.WriteLine($"Delete id: {item.Id}, Name: {item.Name}, Status: {item.Status}");
        isDropdownOpen = !isDropdownOpen;
    }
}
@functions {
    public class Item
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public bool IsDropdownOpen { get; set; }
    }
}

```
