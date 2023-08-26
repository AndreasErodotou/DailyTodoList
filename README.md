# Daily Todo List Project
The "Daily Todo List" project is a web application developed using Angular and PrimeNG that aims to enhance users' daily productivity by offering a comprehensive task management system. The project's primary goal is to empower users to efficiently organize their day by creating, managing, and tracking tasks.

## Key Features
1. **Task Creation and Management:**
Users can easily create tasks for their day ahead. These tasks can be assigned titles, descriptions, due date (is set automatically), and priority levels. The intuitive user interface enables efficient task entry and organization.

1. **Task Tracking:**
Users can mark tasks as completed once they are finished during the day. The application provides clear visual indicators to differentiate between completed and pending tasks, aiding in tracking progress.

1. **Expired Task Identification:**
Tasks that were created on the previous day and remain incomplete are automatically identified as expired. This feature ensures that users are reminded of unfinished tasks and gives them the ability to 'restore' them, that means that will be transfer to pending tasks and the new deadline will be the end of today.

1. **Automatic Task Expiry:**
At the end of the day, any tasks that remain incomplete are automatically marked as expired. This ensures that users are encouraged to focus on the tasks at hand each day.

1. **User Data:**
Currenlty user data are saved in browser local storage. That means that are accessible only from the browser that the user use. The current impementation supports only the user interface. In the future I might connect it to a backend as well.

1. **Clone Task**
Tasks that are done, they can be cloned and will be added to pending tasks again.

1. **Restore Task**
Tasks that are expired, they can be restored and will be added to pending tasks again.

1. **User-Friendly Interface:**
Leveraging the capabilities of PrimeNG, the project offers an intuitive and responsive user interface. Users can easily interact with their tasks, view their status, and navigate through the application's features.

## Future Extensions
1. **Switch View Mode:**
Users will be able to switch to card and table view modes

1. **Connect It To Backend**
User data will be saved to a db

1. **Login or Have a Unique Id**
User will be able to log in or have a unique id that it will be created automatically, with this addition users will be able to have their own data and retieve them from anywhere

## Technology Stack
- Angular: A modern JavaScript framework for building web applications.
- PrimeNG: A UI component library for Angular applications, providing rich and responsive user interface elements.

The "Daily Todo List" project aims to streamline users' daily routines by providing an effective task management solution that combines task creation, organization, and tracking. Its integration of Angular and PrimeNG technologies ensures a modern and visually appealing user experience, enhancing users' productivity and enabling them to make the most of each day.