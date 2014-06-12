(function() {
    'use strict';

    var Person = dejavu.AbstractClass.declare({
        $name: 'Person',
        _firstName: null,
        _lastName: null,

        initialize: function(firstName, lastName) {
            this.setFirstName(firstName);
            this.setLastName(lastName);
        },

        setFirstName: function(firstName) {
            this._firstName = firstName;

            return this;
        },

        getFirstName: function() {
            return this._firstName;
        },

        setLastName: function(lastName) {
            this._lastName = lastName;

            return this;
        },

        getLastName: function() {
            return this._lastName;
        },

        toString: function () {
            return this.getFirstName() + ' ' + this.getLastName();
        },

        $abstracts: {
            getOccupation: function () {}
        }
    });

    var Student = dejavu.Class.declare({
        $name: 'Student',
        $extends: Person,
        _grade: null,

        initialize: function (firstName, lastName, grade) {
            this.$super(firstName, lastName);
            this.setGrade(grade);
        },

        setGrade: function(grade) {
            if(typeof grade != 'number' || grade < 2 || grade > 6) {
                throw {
                    message: 'Invalid grade',
                    value: grade
                }
            }

            this._grade = grade;

            return this;
        },

        getGrade: function() {
            return this._grade;
        },

        toString: function() {
            return this.$super() + ' with grade: ' + this.getGrade();
        },

        getOccupation: function () {
            return 'Student';
        }
    });

    var Worker = dejavu.Class.declare({
        $name: 'Worker',
        $extends: Person,
        _weekSalary: null,
        _workHoursPerDay: null,

        initialize: function (firstName, lastName, weekSalary, workHoursPerDay) {
            this.$super(firstName, lastName);
            this.setWeekSalary(weekSalary);
            this.setWorkHoursPerDay(workHoursPerDay);
        },

        setWeekSalary: function(weekSalary) {
            if(typeof weekSalary != 'number' || weekSalary < 0) {
                throw {
                    message: 'Invalid week salary',
                    value: weekSalary
                }
            }

            this._weekSalary = weekSalary;

            return this;
        },

        getWeekSalary: function() {
            return this._weekSalary;
        },

        setWorkHoursPerDay: function(workHoursPerDay) {
            if(typeof workHoursPerDay != 'number' || workHoursPerDay < 0 || workHoursPerDay > 24) {
                throw {
                    message: 'Invalid work hours per day',
                    value: workHoursPerDay
                }
            }

            this._workHoursPerDay = workHoursPerDay;

            return this;
        },

        getWorkHoursPerDay: function() {
            return this._workHoursPerDay;
        },

        toString: function() {
            return this.$super() + ' with week salary: ' + this.getWeekSalary() + ' working hours per day ' + this.getWorkHoursPerDay();
        },

        getOccupation: function () {
            return 'Worker';
        }
    });

    var people = [
        new Student("Ivan", "Georgiev", 5.6),
        new Student("Petyr", "Popov", 2.6),
        new Student("Ivan", "Popiordanov", 3),
        new Student("Jivka", "Trendafilova", 4.52),
        new Student("Stoyan", "Lesev", 5.2),
        new Student("Stefan", "Bonchev", 4.4),
        new Student("Mariya", "Ivanova", 5),
        new Student("Lili", "Mihailova", 6),
        new Student("Stefan", "Georgiev", 2.53),
        new Student("Nedelina", "Shopova", 3.33),
        new Student("Spirdon", "Stamatov", 3.59),
        new Worker("Stoqn", "Dimitrov", 45.32, 4),
        new Worker("Stefan", "Dinchev", 60.4, 12),
        new Worker("Liubomir", "Georgiev", 42.5, 3),
        new Worker("Preslava", "Milkova", 55.14, 2),
        new Worker("Mila", "Yaneva", 53.32, 6),
        new Worker("Petyr", "Dimitrov", 64.864, 7),
        new Worker("Aneliya", "Grueva", 56.54, 8),
        new Worker("Nikolai", "Canev", 65.13, 5),
        new Worker("Ivan", "Dimitrov", 63.58, 2),
        new Worker("Miroslava", "Peicheva", 68.85, 5),
        new Worker("Stamat", "Spiridonov", 45.05, 5)];

    var ul = $('<ul>');
    $('body').append(ul);

    for(var i in people) {
        var li = $('<li>');
        ul.append(li);
        li.append('<h2>' + people[i].getOccupation() + '</h2>');
        li.append('<p>' + people[i].toString() + '</p>');
    }
})();