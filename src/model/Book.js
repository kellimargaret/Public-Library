function Book ( slots) {
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.year = slots.year;
};

// Load all Book Instances
Book.loadAll = function() {
  var i=0, key="", keys=[], bookTableString="", bookTable={};
  try {
    if (localStorage["bookTable"]) {
      bookTableString = localStorage["bookTable"];
    }
  } catch (e) {
    alert ("Error when reading from Local Storage\n" + e);
  }
  if (bookTableString) {
    bookTable = JSON.parse ( bookTableString);
    keys = Object.keys( bookTable);
    console.log ( keys.length +" books loaded.");
    for (i=0, i < keys.length; i++) {
      key = keys[i];
      Book.instance[key] = Book.convertRow20bj ( bookTable[key]);
    }
  }
};

//Save all Book Instances
Book.saveAll = function() {
  var bookTableString = "", error=false,
    nmrOfBooks = Object.keys ( Book.instances).length;
  try {
    bookTableString = JSON.stringify( Book.instances);
    localStorage["bookTable"]
 = bookTableString;
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( nmrOfBooks + " books saved.");
};

//Create a new Book instance
Book.add = function(slots) {
  var book = new Book(slots);
  console.log("Book " + slots.isbn + " created!");
};
