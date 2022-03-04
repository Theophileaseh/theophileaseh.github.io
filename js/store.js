function store (){ // stores items in the localStorage
    const names = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const desktopEmail = document.getElementById('desktop_email').value;
    const message2 = document.getElementById('message2').value;
  
    const submitted = {
      names: name,
      email: email,
      message: message,
      firstName: first_name,
      lastName: last_name,
      desktopEmail: desktop_email,
      message2: message2,
    }
  
    window.localStorage.setItem(key,JSON.stringify(submitted));  
      // converting object to string
  }
  
  function retrieveRecords(){ // retrieves items in the localStorage
    const key = document.getElementById('retrieveKey').value; // gets key from user
    console.log('retrive records');
    const records = window.localStorage.getItem(key); // searches for the key in localStorage
    const paragraph = document.createElement('p');
    const infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    const element = document.getElementById('retrieve');
    element.appendChild(paragraph);
  }
  
  function removeItem(){ // deletes item from localStorage
    const key = document.getElementById('removeKey').value; // gets key from user
    localStorage.removeItem(key) // passes key to the removeItem method
    console.log('remove items');
  }
  
  function clearStorage(){ // clears the entire localStorage
    localStorage.clear()
    console.log('clear records');
  }
  
  window.onload = function(){ // ensures the page is loaded before functions are executed.
    document.getElementById('carForm').onsubmit = store;
    document.getElementById('clearButton').onclick = clearStorage;
    document.getElementById('removeButton').onclick = removeItem;
    document.getElementById('retrieveButton').onclick = retrieveRecords;
  };