// const { event } = require("jquery");

console.log('salary calculator'); 


function submitForm(event){
    console.log('submit form');

    event.preventDefault(); 

    let firstnameInput = document.querySelector('#firstname-input').value 
    let lastnameIput = document.querySelector('#lastname-input').value 
    let idInput = document.querySelector('#id-input').value 
    let jobtitleInput  = document.querySelector('#jobtitle-input').value 
    let annualsalaryInput = document.querySelector('#annualsalary-input').value 


    let employeeData= document.querySelector('#employeetableinfo'); 


    employeeData.innerHTML += `
        <tr>
            <td>${firstnameInput}</td>
            <td>${lastnameIput}</td>
            <td>${idInput}</td>
            <td>${jobtitleInput}</td>
            <td>${annualsalaryInput}</td>
            <td> <button onClick="removeRow(event)">Delete</button> </td>
        </tr>
    `;

}

function removeRow(event){
    event.target.closest('tr').remove(); 
}


