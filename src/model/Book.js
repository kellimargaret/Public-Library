function Book ( slots) {
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.year = slots.year;
};

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
