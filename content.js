"use strict"

function createTeacher() {
    let builder = new TeacherBuilder();
    builder.setName("Виктор");
    builder.setSurname("Карамзин");
    builder.setPatronymic("Геннадьевич");
    builder.setOcupation("Преподаватель специальных дисциплин.");
    builder.setDegree("Высшее");
    builder.setCategory("Первая");
    builder.setEducation("Московский государственный институт электронной техники (технический университет).");
    builder.setDiscipline("Информатика");

    return builder.build();
}

let teacher = createTeacher();
let teacherStrFactory = new TeacherHtmlStringFactory();
let teacherStr = teacherStrFactory.create(teacher);

document.write(teacherStr);