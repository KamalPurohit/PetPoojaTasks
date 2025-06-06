import {
  browseTemplates,
  calendar,
  home,
  issues,
  logout,
  reports,
  Task,
  templateLibrary,
  userManagement,
  workflow,
} from "../SidebarIcons";

const routesData = [
  {
    name: "Home",
    path: "/home",
    icon: home,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: Task,
  },
  {
    name: "Issues",
    path: "/issues",
    icon: issues,
  },
  {
    name: "Workflow",
    path: "/Workflow",
    icon: workflow,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: calendar,
  },
  {
    name: "Browse Templates",
    path: "/browseTemplates",
    icon: browseTemplates,
  },
  {
    name: "Template Library",
    path: "/templateLibrary",
    icon: templateLibrary,
  },
  {
    name: "User Management",
    path: "/userManagement",
    icon: userManagement,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: reports,
  },
];

const dashboardStats = [
  {
    icon: Task,
    title: "22 Tasks",
    stats: [
      { name: "Ongoing", count: "10", color: "warning" },
      { name: "Overdue", count: "2", color: "error" },
      { name: "Completed", count: "10", color: "success" },
    ],
  },
  {
    icon: issues,
    title: "22 Issues",
    stats: [
      { name: "Open", count: "10", color: "warning" },
      { name: "Ignored", count: "2", color: "error" },
      { name: "Resolved", count: "10", color: "success" },
    ],
  },
  {
    icon: Task,
    title: "20 Workflows",
    stats: [
      { name: "Ongoing Tasks", count: "10", color: "warning" },
      { name: "Scheduled Tasks", count: "0", color: "scheduled" },
      { name: "Responses", count: "10", color: "success" },
    ],
  },
];

const employeeData = [
  {
    name: "Anita",
    department: "IT Services",
    assigned: 90,
    ongoing: 90,
    overdue: 90,
    completed: "90%",
  },
  {
    name: "Rahul",
    department: "Human Resources",
    assigned: 31,
    ongoing: 31,
    overdue: 31,
    completed: "31%",
  },
  {
    name: "Priya",
    department: "Sales Division",
    assigned: 45,
    ongoing: 45,
    overdue: 45,
    completed: "45%",
  },
  {
    name: "Vikram",
    department: "Research and Development",
    assigned: 79,
    ongoing: 79,
    overdue: 79,
    completed: "79%",
  },
  {
    name: "Sita",
    department: "Marketing Team",
    assigned: 52,
    ongoing: 52,
    overdue: 52,
    completed: "52%",
  },
  {
    name: "Ravi",
    department: "Finance Department",
    assigned: 64,
    ongoing: 64,
    overdue: 64,
    completed: "64%",
  },
  {
    name: "Kiran",
    department: "Customer Support",
    assigned: 87,
    ongoing: 87,
    overdue: 87,
    completed: "87%",
  },
];

const workAllocatedTasks = [
  {
    id: "#3789",
    title: "How to Manage Stock",
    comments: 14,
    date: "22 June, 2024",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#3789",
    title: "How to Manage Stock",
    comments: 14,
    date: "22 June, 2024",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#7182",
    title: "Tracking Daily Earnings",
    comments: 18,
    date: "12 October, 2024",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#6047",
    title: "Tool for Managing Reservations",
    comments: 17,
    date: "5 September, 2025",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#6047",
    title: "Tool for Managing Reservations",
    comments: 17,
    date: "5 September, 2025",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#4820",
    title: "Coordinating Employee Shifts",
    comments: 15,
    date: "10 July, 2025",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#5913",
    title: "Reviewing Client Happiness",
    comments: 16,
    date: "1 August, 2024",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
  {
    id: "#2456",
    title: "Ways to Prepare Meals",
    comments: 13,
    date: "15 May, 2024",
    time: "11:00 am",
    status: "Ongoing",
    category: "Inventory",
  },
];

const personalNotes = [
  {
    completed: false,
    title: "Make shift & assign",
    description:
      "Assign individuals to specific shifts based on availability and role requirements",
  },
  {
    completed: false,
    title: "Menu correction",
    description:
      "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
  },
];

const overdueTasksData = [
  {
    name: "Menu Planning",
    assignedTo: "Ajay",
    status: "Overdue",
    dueDate: "12-07-2024",
  },
  {
    name: "Staff Scheduling",
    assignedTo: "Niraj",
    status: "Overdue",
    dueDate: "01-08-2023",
  },
  {
    name: "Inventory management",
    assignedTo: "Vijay",
    status: "Overdue",
    dueDate: "02-09-2022",
  },
  {
    name: "Customer Feedback Analysis",
    assignedTo: "Arvind",
    status: "Overdue",
    dueDate: "11-06-2025",
  },
  {
    name: "Budget Forecasting",
    assignedTo: "Priya",
    status: "Overdue",
    dueDate: "04-11-2020",
  },
  {
    name: "Marketing Strategy Development",
    assignedTo: "Suresh",
    status: "Overdue",
    dueDate: "10-05-2026",
  },
  {
    name: "Quality Assurance Testing",
    assignedTo: "Fatima",
    status: "Overdue",
    dueDate: "03-10-2021",
  },
];

const workflowsData = [
    { title: "Stock Control Strategies", responses: 47, tasks: 22 },
    { title: "How to Handle Inventory", responses: 23, tasks: 15 },
    { title: "Inventory Management Tips", responses: 56, tasks: 30 },
    { title: "Managing Your Stock Effectively", responses: 89, tasks: 5 },
    { title: "Optimizing Your Inventory", responses: 78, tasks: 12 },
    { title: "Stock Management Techniques", responses: 34, tasks: 8 },
  ];
export {
  routesData,
  dashboardStats,
  workAllocatedTasks,
  employeeData,
  personalNotes,
  overdueTasksData,
  workflowsData,
};
