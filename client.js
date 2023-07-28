console.log('salary calculator'); 


//function to submit form. 

function submitForm(event){
    console.log('submit form');

    event.preventDefault(); 

    let firstnameInput = document.querySelector('#firstname-input').value 
    let lastnameIput = document.querySelector('#lastname-input').value 
    let idInput = document.querySelector('#id-input').value 
    let jobtitleInput  = document.querySelector('#jobtitle-input').value 
    let annualsalaryInput = document.querySelector('.annualsalary-input').value 


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

    //updates the monthly cost each time an annual salry is inputted. 

    monthlyCost(); 

    
}


//function to calculate the monthly cost 

function monthlyCost(){
    event.preventDefault(); 
    let totalannualSalaries = document.querySelectorAll('.annualsalary-input');
    let totalSalary= 0; 

    for (const salaries of totalannualSalaries){
         totalSalary += Number(salaries.value);
    }
    
    console.log(totalSalary);
    
    let totalMonthlyCost= totalSalary / 12;

    if (totalMonthlyCost > 20000){
        tMonthlycost.style.backgroundcolor= 'red';  
    }else {
        tMonthlycost.style.backgroundcolor = 'initial'; 
    }
    
    let tMonthlycost = document.querySelector('#tMonthlycost');
    tMonthlycost.innerHTML=`<td> Total Monthly Cost: ${totalMonthlyCost.toFixed(2)} </td>`;
}







function removeRow(event){
    event.target.closest('tr').remove(); 
    //updates the monthly cost after an employee's annual salary is deleted. 
    monthlyCost(); 
}
