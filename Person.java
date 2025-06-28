public class Person {
    String name;
    int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void greet() {
        System.out.println("Hi, my name is " + name + " and I'm " + age + " years old.");
    }

    // Main method to run
    public static void main(String[] args) {
        Person person1 = new Person("Bob", 30);
        person1.greet();  // Output: Hi, my name is Bob and I'm 30 years old.
    }
}