"use strict"

class ITeacherBuilder {
    build() {
        throw new NotImplementedException();
    }
}

class TeacherBuilder {
    _name;
    _surname;
    _patronymic;
    _ocupation;
    _degree;
    _category;
    _education;
    _discipline;
    _note = "";

    constructor() {}

    setName(name)             { this._name = name; }
    setSurname(surname)       { this._surname = surname; }
    setPatronymic(patronymic) { this._patronymic = patronymic; }
    setOcupation(ocupation)   { this._ocupation = ocupation; }
    setDegree(degree)         { this._degree = degree; }
    setCategory(category)     { this._category = category; }
    setEducation(education)   { this._education = education; }
    setDiscipline(discipline) { this._discipline = discipline; }
    setNote(note)             { this._note = note; }

    build() {
        let teacher = new Teacher(
            this._name,
            this._surname,
            this._patronymic,
            this._ocupation,
            this._degree,
            this._category,
            this._education,
            this._discipline,
            this._note
        );

        return teacher;
    }
}

class ITeacher { }

class Teacher extends ITeacher {
    _name;
    _surname;
    _patronymic;
    _ocupation;
    _degree;
    _category;
    _education;
    _discipline;
    _note = "";

    constructor(name, surname, patronymic, ocupation, degree, category, education, discipline, note) {
        super();

        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._ocupation = ocupation;
        this._degree = degree;
        this._category = category;
        this._education = education;
        this._discipline = discipline;
        this._note = note;
    }

    get name()       { return this._name; }
    get surname()    { return this._surname; }
    get patronymic() { return this._patronymic; }
    get ocupation()  { return this._ocupation; }
    get degree()     { return this._degree; }
    get category()   { return this._category; }
    get education()  { return this._education; }
    get discipline() { return this._discipline; }
    get note()       { return this._note; }
}

class ITeacherStringFactory {
    create(teacher) {
        throw new NotImplementedException();
    }
}

class TeacherFormattedStringFactory extends ITeacherStringFactory {
    create(teacher) {
        let str = `${teacher.surname} ${teacher.name} ${teacher.patronymic}\nДолжность: ${teacher.ocupation}\nУровень образования: ${teacher.degree}\n`
        + `Категория: ${teacher.category}\nОбразование: ${teacher.education}\nДисциплина: ${teacher.discipline}\nПримечание: ${teacher.note}`;

        return str;
    }
}

class TeacherHtmlStringFactory extends TeacherFormattedStringFactory {
    create(teacher) {
        let str = super.create(teacher);
        
        let teacherProps = [];
        str.split("\n").forEach(
                (line) => teacherProps.push(line + "<br>")
            );
        
        let teacherHtmlStr = teacherProps.join("");

        return teacherHtmlStr;
    }
}

class NotImplementedException { }