package com.anurag.backend.service;
import com.anurag.backend.entity.Employee;
import com.anurag.backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository repo;
    public EmployeeService(EmployeeRepository repo){ this.repo=repo; }

    public List<Employee> getAll(){ return repo.findAll(); }
    
    public Employee getById(Long id){ 
        return repo.findById(id).orElse(null); 
    }
    
    public Employee save(Employee e){ return repo.save(e); }
    
    public Employee update(Long id, Employee newData){
        Employee existing = repo.findById(id).orElse(null);
        if(existing != null){
            existing.setName(newData.getName());
            existing.setEmail(newData.getEmail());
            existing.setDepartment(newData.getDepartment());
            existing.setRole(newData.getRole());
            return repo.save(existing);
        }
        return null;
    }
    
    public void delete(Long id){ repo.deleteById(id); }
}