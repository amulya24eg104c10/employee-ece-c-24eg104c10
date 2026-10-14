package com.anurag.backend.config;

import com.anurag.backend.entity.Employee;
import com.anurag.backend.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final EmployeeRepository repo;

    public DataLoader(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        if (repo.count() == 0) {
            Employee e1 = new Employee();
            e1.setName("Anurag");
            e1.setEmail("anurag@test.com");
            e1.setDepartment("IT");
            e1.setRole("Developer");
            
            Employee e2 = new Employee();
            e2.setName("Amulya");
            e2.setEmail("amulya@test.com");
            e2.setDepartment("HR");
            e2.setRole("Manager");

            repo.save(e1);
            repo.save(e2);

            System.out.println("==========================================");
            System.out.println("SAMPLE EMPLOYEES INSERTED DIRECTLY!");
            System.out.println("Total Employees: " + repo.count());
            System.out.println("==========================================");
            repo.findAll().forEach(emp -> 
                System.out.println(emp.getId() + " | " + emp.getName() + " | " + emp.getEmail())
            );
            System.out.println("==========================================");
            System.out.println("API Ready: http://localhost:8080/api/employees");
            System.out.println("==========================================");
        }
    }
}