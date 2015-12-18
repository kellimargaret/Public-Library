pl.view.createBook = {
  setUserInterface: function() {
    var saveButton = document.forms['Book'].commit;
    //load all book objects
    Book.loadAll();
    //Set an event handler for the save/submit button
    saveButton.addEventListener("click",
        pl.view.createBook.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", functoin() {
      Book.saveAll();
    });
  },
  handleSaveButtonClickEvent: function() {
    var formEl = document.forms['Book'];
    var slots = (isbn: formEl.isbn.value,
        title: formEl.title.value,
        year: formEl.year.value);
    Book.add(slots);
    formEl.reset();
  }
};
