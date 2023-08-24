import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TaskModalComponent } from './task-modal/task-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'daily-todo-list';
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}
  pendingTasks = [
    {
      id: 1,
      title: 'Finish Project Proposal',
      description:
        'Write the final draft of the project proposal including cost estimates and timeline.',
      priority: true,
    },
    {
      id: 2,
      title: 'Client Meeting Preparation',
      description:
        'Gather all relevant documents and data for the client presentation on the upcoming project.',
      priority: false,
    },
    {
      id: 3,
      title: 'Code Review',
      description:
        'Conduct a thorough code review for the recent feature implementation to ensure quality and performance.',
      priority: true,
    },
    {
      id: 4,
      title: 'Bug Fixing',
      description:
        'Investigate and fix the reported bug in the user authentication module of the application.',
      priority: false,
    },
    {
      id: 5,
      title: 'Team Training Session',
      description:
        'Prepare a presentation and materials for the training session on the new development tools and practices.',
      priority: true,
    },
  ];
  finishedTasks = [
    {
      id: 6,
      title: 'Client Feedback Analysis',
      description:
        'Collect and analyze feedback from recent client interactions to identify areas for improvement.',
      priority: true,
    },
    {
      id: 7,
      title: 'Database Optimization',
      description:
        'Optimize database queries and indexes to improve the overall performance of the application.',
      priority: false,
    },
    {
      id: 8,
      title: 'Monthly Sales Report',
      description:
        'Compile and generate the monthly sales report for presentation to the management team.',
      priority: true,
    },
    {
      id: 9,
      title: 'User Interface Refinement',
      description:
        'Collaborate with the design team to refine the user interface elements based on usability testing results.',
      priority: false,
    },
    {
      id: 10,
      title: 'Server Maintenance',
      description:
        'Perform routine maintenance on the server infrastructure, including updates and security patches.',
      priority: true,
    },
  ];
  expiredTasks = [
    {
      id: 11,
      title: 'Documentation Update',
      description:
        'Review and update the project documentation to reflect recent changes and enhancements.',
      priority: true,
    },
    {
      id: 12,
      title: 'QA Testing',
      description:
        'Execute thorough quality assurance testing on the new software release to identify and report any defects.',
      priority: false,
    },
    {
      id: 13,
      title: 'Code Refactoring',
      description:
        'Refactor the legacy codebase to improve maintainability and align with coding standards.',
      priority: true,
    },
    {
      id: 14,
      title: 'Team Performance Review',
      description:
        'Conduct individual performance reviews for team members and provide constructive feedback.',
      priority: false,
    },
    {
      id: 15,
      title: 'Marketing Campaign Planning',
      description:
        'Collaborate with the marketing department to plan and strategize the upcoming product launch campaign.',
      priority: true,
    },
  ];

  showTaskModal(task: any) {
    this.ref = this.dialogService.open(TaskModalComponent, {
      header: task? 'Edit Task': 'Create Task',
      data: task,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe(() => {
      console.log('modal closed');
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
