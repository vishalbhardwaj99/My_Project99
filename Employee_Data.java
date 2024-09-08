import java.util.*;
import java.util.ArrayList;
import java.util.List;

public class Employee_Data {
    public static void main(String[] args) {
        EmployeeDATA employeeDATA = new EmployeeDATA();
        Scanner sc = new Scanner(System.in);
        int choice;
        do {
            System.out.println("1. Add New Empolyee");
            System.out.println("2. Update Employee");
            System.out.println("3. Remove Employee");
            System.out.println("4. Get All Employee Data");
            System.out.println("5. Exit");

            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    AddAllEmployee(employeeDATA, sc);
                    break;
    
                case 2:
                    UpdateEmployee(employeeDATA, sc);
                    break;
    
                case 3:
                    RemoveEmployee(employeeDATA, sc);
                    break;
    
                case 4:
                    GetAllEmployee(employeeDATA);
                    break;
    
                case 5:
                    System.out.println("Exiting.......");
                    break;
    
                default:
                    System.out.println("Invalid Choice, Please Try Again");
                    break;
            }
        } while (choice != 5);

        sc.close();
    }

    private static void AddAllEmployee(EmployeeDATA employeeDATA, Scanner sc) {
        System.out.println("Enter The Name Of The Employee");
        String name = sc.nextLine();
        sc.nextLine();
        System.out.println("Enter The Age OF The Employee");
        int age = sc.nextInt();
        System.out.println("Enter The Salary");
        int salary = sc.nextInt();
        System.out.println("Enter The Address");
        String address = sc.nextLine();
        sc.nextLine();

        Employee employee = new Employee(age, salary, name, address);
        employeeDATA.AddAllEmployee(employee);
    }

    private static void UpdateEmployee(EmployeeDATA employeeDATA, Scanner sc) {
        System.out.println("Enter Employee Id ");
        int id = sc.nextInt();
        System.out.println("Enter The Employee Name To Be Update");
        String name = sc.nextLine();
        sc.nextLine();
        System.out.println("Enter The Age");
        int age = sc.nextInt();
        System.out.println("Enter The Updated Salary");
        int salary = sc.nextInt();
        System.out.println("Enter The New Address");
        String address = sc.nextLine();
        sc.nextLine();

        Employee employee = new Employee(age, salary, name, address, id);
        employeeDATA.UpdateEmployee(employee);
    }

    private static void RemoveEmployee(EmployeeDATA employeeDATA, Scanner sc) {
        System.out.println("Enter the Employee ID To Be Removed");
        int Id = sc.nextInt();
        employeeDATA.RemoveEmployee(Id);
    }

    private static void GetAllEmployee(EmployeeDATA employeeDATA) {
        if (employeeDATA.GetAllEmployee().isEmpty()) {
            System.out.println("Enter The Details Of Employee first");
        } else {
            for (Employee employe : employeeDATA.GetAllEmployee()) {
                System.out.println(employe);
            }
        }
    }
}

class Employee {
    private int age;
    private int salary;
    private String name;
    private String address;
    private int Id;

    public Employee(int age, int salary, String name, String address) {
        this.age = age;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }

    public Employee(int age, int salary, String name, String address, int Id) {
        this.age = age;
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.Id = Id;
    }

   

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    @Override
    public String toString() {
        return "Employee [age=" + age + ", salary=" + salary + ", name=" + name + ", address=" + address + ", Id=" + Id
                + "]";
    }

   

}

class EmployeeDATA {

    private List<Employee> Employee;
    private int CurrentID;

    public EmployeeDATA() {
        Employee = new ArrayList<>();
        CurrentID = 1;
    }

    public void AddAllEmployee(Employee employee) {
        employee.setId(CurrentID++);
        Employee.add(employee);

    }

    public void UpdateEmployee(Employee employee) {
        for (Employee E : Employee) {
            if (E.getId() == employee.getId()) {
                E.setName(employee.getName());
                E.setAge(employee.getAge());
                E.setAddress(employee.getAddress());
                E.setSalary(employee.getSalary());
                break;
            }
        }
    }

    public void RemoveEmployee(int Id) {
        Employee.removeIf(employee -> employee.getId() == Id);
        System.out.println("Employee " + Id + " Has Been Removed");
    }

    public List<Employee> GetAllEmployee() {
        return new ArrayList<>(Employee);
    }
}
