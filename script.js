document.getElementById("assetForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var assetName = document.getElementById("assetName").value;
    var assetValue = document.getElementById("assetValue").value;
  
    addAssetToList(assetName, assetValue);
    clearForm();
  });
  
  function addAssetToList(name, value) {
    var table = document.getElementById("assetList");
    var newRow = table.insertRow(table.rows.length);
    
    var nameCell = newRow.insertCell(0);
    nameCell.textContent = name;
    
    var valueCell = newRow.insertCell(1);
    valueCell.textContent = value;
  }
  
  function clearForm() {
    document.getElementById("assetName").value = "";
    document.getElementById("assetValue").value = "";
  }
  