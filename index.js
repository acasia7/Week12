var selectedRow = null; //start off with no objects

function onFormSubmit(e){ 
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){ //read the data stored in array
    var formData = []; 
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

function insertNewRecord(data){ //add data to the table body
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.product;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.qty;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.perPrice;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

function onEdit(td){ //edit data in table body
    selectedRow = td.parentElement.parentElement;
    document.getElementById('product').value = selectedRow.cells[0].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[1].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){ 
    selectedRow.cells[0].innerHTML = formData.product;
    selectedRow.cells[1].innerHTML = formData.qty;
    selectedRow.cells[2].innerHTML = formData.perPrice;
}

function onDelete(td){ //delete data
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){ //reset the data
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
    selectedRow = null;
}