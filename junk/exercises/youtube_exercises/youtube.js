let options = {
    valueNames: ['fname', 'lname', 'year']
};

let people = new List('people', options);

let fname_field = $('#fname-field'),
    lname_field = $('#lname-field'),
    year_field = $('#year-field'),
    addbtn = $('#add-btn');

addbtn.click(function(){
    people.add({
        fname: fname_field.val(),
        lname: lname_field.val(),
        year: year_field.val()
    });
});

