//Defining a Person constructor that will become the prototype for the parent class of ALL people
function Person(name, age, weight, gender)
{
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
}

//Encapsulates into Person prototype a method to get the information of the person
Person.prototype.getInfo = function()
{
    return "Hi, my name is " + this.name + ". I'm a " + this.gender + " that weighs " + this.weight + " pounds and am " + this.age + " years old.";
};

function Teacher(name, age, weight, gender, school, salary, yearsOfExperience)
{
    //Call the parent constructor to set the inherited properties for the subclass
    Person.call(this, name, age, weight, gender);

    //Sets new properties for the subclass
    this.school = school;
    this.salary = salary;
    this.yearsOfExperience = yearsOfExperience;
}

//Inherit the Person class
Teacher.prototype = new Person();

//Override the parent getInfo method for a Teacher
Teacher.prototype.getInfo = function()
{
    return "Hi, my name is " + this.name + ". I'm a " + this.gender + " that weighs " + this.weight + " pounds and am " + this.age + " years old." +
        " I'm a teacher that works at " + this.school + " and I've been doing it for " + this.yearsOfExperience + " years; plus, I make $" + this.salary + ".";
};

function Employer(name, age, weight, gender, businessName, employees, years)
{
    //Call the parent constructor to set the inherited properties for the subclass
    Person.call(this, name, age, weight, gender);

    //Sets new properties for the subclass
    this.businessName = businessName;
    this.years = years;
    this.employees = employees;
}

//Inherit the Person class
Employer.prototype = new Person();

//Override the parent getInfo method for an Employer
Employer.prototype.getInfo = function()
{
    return "Hi, my name is " + this.name + ". I'm a " + this.gender + " that weighs " + this.weight + " pounds and am " + this.age + " years old." +
        " I own a business called " + this.businessName + " and it's been open for " + this.years + " years; plus, I have " + this.employees + " employees.";
};

//New object that will simply inherit everything from the Person prototype to demonstrate that inheritance works
function Inherit(name, age, weight, gender)
{
    //Call the parent constructor to set the inherited properties for the subclass
    Person.call(this, name, age, weight, gender);
}

//Inherit the Person class
Inherit.prototype = new Person();

function Parent(name, age, weight, gender, children, yearsMarried)
{
    //Call the parent constructor to set the inherited properties for the subclass
    Person.call(this, name, age, weight, gender);

    //Sets new properties for the subclass
    this.children = children;
    this.yearsMarried = yearsMarried;
}

//Inherit the Person class
Parent.prototype = new Person();

//Override the parent getInfo method for a Parent
Parent.prototype.getInfo = function()
{
    return "Hi, my name is " + this.name + ". I'm a " + this.gender + " that weighs " + this.weight + " pounds and am " + this.age + " years old." +
        " I'm the parent of " + this.children + " lovely children, and I've been married for " + this.yearsMarried + " years.";
};

function main()
{
    //Instantiate an array to hold the people
    var personArray = [];

    personArray[0] = new Teacher("Kyle Krater", 35, 190, "male", "Desert Edge", 5, 8);
    personArray[1] = new Employer("Omar Chavez", 28, 195, "male", "Chavez Lawncare", 4, 5);
    personArray[2] = new Inherit("Brandon Evans", 18, 170, "male");
    personArray[3] = new Parent("Carlos Chavez", 48, 160, "male", 5, "20");

    //Polymorphically exercise the mehtods of the objects
    for (var i = 0; i < personArray.length; i++) {
        document.write(personArray[i].getInfo() + "<br><br>");
    }
}