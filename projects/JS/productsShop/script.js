function addItem() {
    // Get the values from the input fields
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let raiting = document.getElementById("raiting").value;

    // Check the availability checkbox and set the appropriate icon
    let availability = document.getElementById("checkbox").checked ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-x text-danger"></i>';

    // Add a new row to the product table with the input values
    document.getElementById("product").innerHTML += ` 
        <tr>
            <td>${name}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td>${raiting}</td>
            <td>${availability}</td>
        </tr>`;

    // Clear the input fields after adding the item
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("raiting").selectedIndex = 0;
    document.getElementById("checkbox").checked = false;
}
