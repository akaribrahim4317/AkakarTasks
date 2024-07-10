interface UsersProps {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  tasks: number;
  tasksCompleted: number;
}

const Users: UsersProps[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    title: 'Manager',
    tasks: 5,
    tasksCompleted: 3,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    title: 'Developer',
    tasks: 8,
    tasksCompleted: 6,
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    title: 'Designer',
    tasks: 4,
    tasksCompleted: 2,
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    title: 'QA Engineer',
    tasks: 7,
    tasksCompleted: 5,
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Davis',
    title: 'Product Owner',
    tasks: 10,
    tasksCompleted: 9,
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Clark',
    title: 'Scrum Master',
    tasks: 3,
    tasksCompleted: 1,
  },
  {
    id: 7,
    firstName: 'Frank',
    lastName: 'Wilson',
    title: 'Business Analyst',
    tasks: 6,
    tasksCompleted: 4,
  },
  {
    id: 8,
    firstName: 'Grace',
    lastName: 'Lee',
    title: 'HR Specialist',
    tasks: 2,
    tasksCompleted: 1,
  },
  {
    id: 9,
    firstName: 'Hank',
    lastName: 'Miller',
    title: 'Marketing Manager',
    tasks: 9,
    tasksCompleted: 7,
  },
  {
    id: 10,
    firstName: 'Ivy',
    lastName: 'Anderson',
    title: 'Sales Representative',
    tasks: 5,
    tasksCompleted: 3,
  },
];

export default Users;
