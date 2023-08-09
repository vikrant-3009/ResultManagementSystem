# Result Management System
The project involves building an application that facilitates the efficient management of student data by teachers, along with a user-friendly 
interface for students to access their own result records. Key features include:

### Teacher Management
- Teachers can log in to the application.
- They can view all student records.
- Update existing records as needed.
- Delete student records if required.

### Student Accessibility
- Students can log in using their unique roll number and name.
- Upon logging in, they can access their personalized result data.

### Pagination
- Student records are displayed in a paginated manner, with 3 records per page.
- Users have the option to select the number of records they want to see on each page.

### Sorting
- The application allows the sorting of student records based on various properties.
- Users can click on table headers to sort records accordingly.


## Technologies Used
This project is developed using Angular 14 and Spring Boot technologies to create an efficient platform for teachers and students 
to manage and access student data and results.

### 1. Angular 14
This project's frontend is developed using Angular 14, a versatile and feature-rich front-end framework, to create a 
comprehensive platform for teachers and students to manage and access student data and results. Leveraging various Angular 
features this application ensures an efficient and user-friendly experience. Key angular features utilized are:

#### # Reactive Forms
- Utilizing reactive forms, the application enhances data entry and validation, providing an intuitive and interactive user
  interface for managing student information.

#### # Routing
- Angular Routing is a powerful feature that allows you to create single-page applications (SPAs) by dynamically changing the
  content displayed on the page without requiring a full page reload. It enables you to define different views for different
  routes and navigate between these views within the same application.

#### # Pagination
- Angular's pagination functionality is employed to display student records in a paginated format, enhancing readability and user 
  experience.

#### # Sorting
- The application implements sorting of student data based on different properties, allowing users to easily organize and access
  information.

#### # Observables
- Angular's powerful observables enable efficient data binding and real-time updates, ensuring seamless communication between the
  front-end and the back-end.

#### # Custom Validators
- Custom validators are integrated into the reactive forms to ensure accurate and valid data entry, maintaining data integrity.

#### # Guards
- Angular guards are employed to enhance security, ensuring that only authorized users can access certain routes and features.

#### # Bootstrap Styling
- Bootstrap's responsive and visually appealing styling components are applied to create a modern and consistent design
  throughout the application.

### 2. Spring Boot
Spring Boot is a powerful, robust and widely used Java based back-end framework. It forms the core of the application's server-side 
logic. It enables secure teacher logins, facilitates data management, and supports CRUD operations for student records. Spring Boot's 
RESTful APIs handle the communication between the front-end and back-end, ensuring smooth data flow.


## Getting Started
To set up and run the project locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies for Angular using npm install.
3. Run the Angular project using "ng serve --open" command.
4. Set up the Spring Boot project in your preferred IDE.
5. Configure the database connection in application.properties file.
6. Build and run the Spring Boot application as a jar file.
