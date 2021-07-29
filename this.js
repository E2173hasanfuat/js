function Employee(name,age,salary){//yapici fonksiyonlar
this.name = name;
this.age=age;
this.salary = salary;

// console.log(this);

this.showInfos = function(){
    console.log(this.name,this.age,this.salary);
}

}

const emp1 = new Employee("Mustafa", 25,4000);
const emp2 = new Employee("Ahmet", 25,5000);

// console.log (emp1);
emp1.showInfos();