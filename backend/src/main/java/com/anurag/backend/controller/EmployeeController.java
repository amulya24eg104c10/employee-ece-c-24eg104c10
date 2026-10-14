package com.anurag.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    private List<Map<String, Object>> employees = new ArrayList<>();
    private int idCounter = 1;

    public EmployeeController() {
        // Sample employees directly in backend output
        Map<String, Object> e1 = new HashMap<>();
        e1.put("id", idCounter++);
        e1.put("name", "Anurag");
        e1.put("email", "anurag@gmail.com");
        e1.put("department", "Developer");
        e1.put("role", "Developer");
        employees.add(e1);

        Map<String, Object> e2 = new HashMap<>();
        e2.put("id", idCounter++);
        e2.put("name", "Amulya");
        e2.put("email", "amulya@gmail.com");
        e2.put("department", "HR");
        e2.put("role", "Manager");
        employees.add(e2);
        
        System.out.println("SAMPLE EMPLOYEES INSERTED DIRECTLY: " + employees);
    }

    @GetMapping
    public List<Map<String, Object>> getAll() {
        return employees;
    }

    @PostMapping
    public Map<String, Object> add(@RequestBody Map<String, Object> emp) {
        emp.put("id", idCounter++);
        employees.add(emp);
        return emp;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        employees.removeIf(e -> (int)e.get("id") == id);
    }
}