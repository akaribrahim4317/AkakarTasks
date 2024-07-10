interface UsersProps {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
}

const Users: UsersProps[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    title: 'Manager',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    title: 'Developer',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    title: 'Designer',
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    title: 'QA Engineer',
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Davis',
    title: 'Product Owner',
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Clark',
    title: 'Scrum Master',
  },
  {
    id: 7,
    firstName: 'Frank',
    lastName: 'Wilson',
    title: 'Business Analyst',
  },
  {
    id: 8,
    firstName: 'Grace',
    lastName: 'Lee',
    title: 'HR Specialist',
  },
  {
    id: 9,
    firstName: 'Hank',
    lastName: 'Miller',
    title: 'Marketing Manager',
  },
  {
    id: 10,
    firstName: 'Ivy',
    lastName: 'Anderson',
    title: 'Sales Representative',
  },
];

export default Users;
