# Project Requirement details
- For this project, two input CSV files are provided, they are as below:  
  1. student.csv  
  in this file, each row represents one student information.   
     each student info include its unqiue id, family_id, cn_name, en_name, email, relation, birthday info.  
  2. class_registration.csv file: each row represents one student's class registration info.   
     if one student registered more than classes, it wil have more than 1 row for the same student_id.   
  different students can register the same class. In this file, below columns are critical:  
     id: unique identifier per row   
     class_id: the actual class identifier  
     student_id: who takes the actual class(class_id)  
     Other columns are not important, can ignore it.
- What we want to implement?  
  calculate each student's english name and the number of classes they are taking, and save the final result into csv file  
  possible output file example:  
  "english_name", "number_of_classes"  
  Ted Xiong, 1  
  Hello Zhang, 2  
  
- 
