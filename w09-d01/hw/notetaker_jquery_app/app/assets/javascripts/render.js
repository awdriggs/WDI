console.log('render working yo');

// render stuff to screen onload
$(document).ready(function() {
    getPreview();
    newNote();

    //setup button listeners
    $('#preview-list-view').on('click', '.note-title', getNote);
    $('#preview-list-view').on('click', '.delete', deleteNote);
    $('#note-view').on('click', '.new', newNote);
    $('#note-view').on('click', '.create', createNote);
    $('#note-view').on('click', '.edit', editNote);
    $('#note-view').on('click', '.update', updateNote);
});

var getPreview = function() {
    var previewTemplate = HandlebarsTemplates["preview"]
    $('#preview-list-view').empty();

    var notes = $.get('/notes', function(data) {
        $.each(data, function() {
            $('#preview-list-view').append(previewTemplate({
                title: this.title,
                id: this.id
            }));
        });
    })
}

var getNote = function() {
    var noteTemplate = HandlebarsTemplates["note"]

    var id = $(this).parent().attr('data-id')


    $.get('/notes/' + id, function(data) {
        $('#note-view').empty();
        $('#note-view').append(noteTemplate({
            title: data.title,
            id: data.id,
            content: data.content
        }));
    })
}

var deleteNote = function() {
    var id = $(this).parent().attr('data-id')

    $.ajax({
        type: 'DELETE',
        url: '/notes/' + id
    }).done(function(response) {
        getPreview();
        newNote();
    })

}

var newNote = function() {
    var noteTemplate = HandlebarsTemplates["newnote"]
    $('#note-view').empty();
    $('#note-view').append(noteTemplate)
}

var createNote = function() {

    var newTitle = $('#title').val()
    var newContent = $('#content').val()

    var addNote = {
        title: newTitle,
        content: newContent
    }

    var addNoteFormatted = {
        note: addNote
    }

    $.ajax({
        type: 'POST',
        data: addNoteFormatted,
        url: '/notes',
        dataType: 'JSON'
    }).done(function(response) {
        getPreview();
        $('#note-view').empty();
        newNote();
    })
    
}

var editNote = function() {

    var id = $(this).parent().attr('data-id')
    $('#note-view').empty();
    var noteTemplate = HandlebarsTemplates["editnote"]

    var notes = $.get('/notes/' + id, function(data) {

        $('#note-view').append(noteTemplate({
            title: data.title,
            id: data.id,
            content: data.content
        }));
    });


}

var updateNote = function() {
	var newTitle = $('#title').val()
    var newContent = $('#content').val()
    var id = $('.id').html()

    var newNote = {
        title: newTitle,
        content: newContent
    }

    var newNoteFormatted = {
        note: newNote
    }

    $.ajax({
        type: 'PUT',
        data: newNoteFormatted,
        url: '/notes/'+id,
        dataType: 'JSON'
    }).done(function(response) {
        getPreview();
        $('#note-view').empty();
        newNote();
    })
}











