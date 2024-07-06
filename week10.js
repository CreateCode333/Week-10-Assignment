//Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//A Bootstrap styled table representing your choice of data.
//A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

document.addEventListener('DOMContentLoaded', function() {
    // Counter for unique row IDs
    let rowCount = 2; // Initial rows already in the table

    // Form submit event listener
    document.getElementById('add-row-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      // Validate if fields are not empty
      if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }

      // Increment row count
      rowCount++;

      // Create new table row
      const newRow = `
        <tr>
          <td>${rowCount}</td>
          <td>${name}</td>
          <td>${email}</td>
        </tr>
      `;

      // Append new row to table body
      document.querySelector('#data-table tbody').insertAdjacentHTML('beforeend', newRow);

      // Reset form fields
      document.getElementById('add-row-form').reset();
    });
  });