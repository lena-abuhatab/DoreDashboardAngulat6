import { Student } from './app.component';

export const STUDENTS: Array<Student> = [
  {
    studentId: 1,
    studentName: 'Student1',
    sex: 'M',
    programs: [
      {
        studentId: 1,
        programName: 'Java',
        programCategory: 'Engineering',
        programStatus: 'Full Time'
      },
      {
        studentId: 1,
        programName: 'HR Management 2',
        programCategory: 'HR',
        programStatus: 'Part Time'
      },
      {
        studentId: 1,
        programName: 'Accounting 1',
        programCategory: 'Finance',
        programStatus: 'Full Time'
      }
    ]
  },
  {
    studentId: 2,
    studentName: 'Student2',
    sex: 'F',
    programs: [
      {
        studentId: 2,
        programName: 'HR Management 1',
        programCategory: 'HR',
        programStatus: 'Part Time'
      },
      {
        studentId: 2,
        programName: 'Accounting 3',
        programCategory: 'Finance',
        programStatus: 'Full Time'
      }
    ]
  },
  {
    studentId: 3,
    studentName: 'Student3',
    sex: 'F',
    programs: [
      {
        studentId: 3,
        programName: 'Java 3',
        programCategory: 'Engineering',
        programStatus: 'Full Time'
      }
    ]
  },
  {
    studentId: 4,
    studentName: 'Student4',
    sex: 'M',
    programs: [
      {
        studentId: 4,
        programName: 'Java 2',
        programCategory: 'Engineering',
        programStatus: 'Full Time'
      },
      {
        studentId: 4,
        programName: 'Accounting 2',
        programCategory: 'Finance',
        programStatus: 'Part Time'
      }
    ]
  },
  {
    studentId: 5,
    studentName: 'Student5',
    sex: 'M',
    programs: [
      {
        studentId: 5,
        programName: 'JavaScript',
        programCategory: 'Engineering',
        programStatus: 'Part Time'
      },
      {
        studentId: 5,
        programName: 'HR Management 5',
        programCategory: 'HR',
        programStatus: 'Full Time'
      }
    ]
  }
];