/*global Socrates Backbone marked */

marked.setOptions({
    gfm      : true,
    sanitize : true
});

window.Socrates = {
    firebaseUrl : 'https://editor-notebook.firebaseIO.com/'
};


// Start the app.
$(function () {
    var view = new Socrates.View({
        model : new Socrates.Model(),
        el    : $('html')
    })
        .render();

    Backbone.history.start();
});
