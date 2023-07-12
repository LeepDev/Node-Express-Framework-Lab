// data/student-db.js

const students = [
    {name: 'Bob Dylan', id: 1, pass: true},
    {name: 'Phil Ross', id: 2, pass: false},
    {name: 'Melk Dek', id: 3, pass: true}
];

module.exports = {
    getAll: function() {
        return students;
    },
    getOne: function(ind) {
        return students[ind-1];
    }
} 