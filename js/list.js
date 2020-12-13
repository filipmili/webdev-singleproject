function loadDoc() {
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function(t01) {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          var schedule = JSON.parse(this.responseText);
          var booklistData = document.getElementById('t01');
  
          for (var i=0; i < schedule.length; i++) {
  
              var tr = document.createElement('tr');
              var s = schedule[i];
  
              var td = document.createElement('td');
              td.innerHTML = s.word;
              tr.appendChild(td);
  
              td = document.createElement('td');
              td.innerHTML = s.nagari;
              tr.appendChild(td);
  
              td = document.createElement('td');
              td.innerHTML = s.description;
              tr.appendChild(td);
  
              td = document.createElement('td');
              td.innerHTML = s.category;
              tr.appendChild(td);
  
              td = document.createElement('td');
              td.innerHTML = "<input type='checkbox' name='check-tab1'>";
              tr.appendChild(td);
  
              booklistData.appendChild(tr);
          }
  
      }
    };
    xhttp.open("GET", "../data/books.json", true);
    xhttp.send();
  }
  
  function tab1_To_tab2()
              {
                  var table1 = document.getElementById("t01"),
                      table2 = document.getElementById("t02"),
                      checkboxes = document.getElementsByName("check-tab1");
              console.log("Val1 = " + checkboxes.length);
                   for(var i = 0; i < checkboxes.length; i++)
                       if(checkboxes[i].checked)
                          {
                              // create new row and cells
                              var newRow = table2.insertRow(table2.length),
                                  cell1 = newRow.insertCell(0),
                                  cell2 = newRow.insertCell(1),
                                  cell3 = newRow.insertCell(2),
                                  cell4 = newRow.insertCell(3);
                                  cell5 = newRow.insertCell(4);
                              // add values to the cells
                              cell1.innerHTML = table1.rows[i+1].cells[0].innerHTML;
                              cell2.innerHTML = table1.rows[i+1].cells[1].innerHTML;
                              cell3.innerHTML = table1.rows[i+1].cells[2].innerHTML;
                              cell4.innerHTML = table1.rows[i+1].cells[3].innerHTML;
                              cell5.innerHTML = "<input type='checkbox' name='check-tab2'>";
                             
                              // remove the transfered rows from the first table [table1]
                              var index = table1.rows[i+1].rowIndex;
                              table1.deleteRow(index);
                              // we have deleted some rows so the checkboxes.length have changed
                              // so we have to decrement the value of i
                              i--;
                             console.log(checkboxes.length);
                          }
              }
  
              function tab2_To_tab1()
              {
                  var table1 = document.getElementById("t01"),
                      table2 = document.getElementById("t02"),
                      checkboxes = document.getElementsByName("check-tab2");
              console.log("Value = " + checkboxes.length);
                   for(var i = 0; i < checkboxes.length; i++)
                       if(checkboxes[i].checked)
                          {
                              // create new row and cells
                              var newRow = table1.insertRow(table1.length),
                                  cell1 = newRow.insertCell(0),
                                  cell2 = newRow.insertCell(1),
                                  cell3 = newRow.insertCell(2),
                                  cell4 = newRow.insertCell(3);
                                  cell5 = newRow.insertCell(4);
                              // add values to the cells
                              cell1.innerHTML = table2.rows[i+1].cells[0].innerHTML;
                              cell2.innerHTML = table2.rows[i+1].cells[1].innerHTML;
                              cell3.innerHTML = table2.rows[i+1].cells[2].innerHTML;
                              cell4.innerHTML = table2.rows[i+1].cells[3].innerHTML;
                              cell5.innerHTML = "<input type='checkbox' name='check-tab1'>";
                             
                              // remove the transfered rows from the second table [table2]
                              var index = table2.rows[i+1].rowIndex;
                              table2.deleteRow(index);
                              // we have deleted some rows so the checkboxes.length have changed
                              // so we have to decrement the value of i
                              i--;
                             console.log(checkboxes.length);
                          }
              }
  