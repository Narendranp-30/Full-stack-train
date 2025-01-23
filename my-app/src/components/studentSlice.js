import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    {
      name: "John",
      rollno: "20ABC001",
      mark1: 54,
      mark2: 97,
      mark3: 88,
      grade: 9
    },
    {
      name: "Michael",
      rollno: "20ABC002",
      mark1: 98,
      mark2: 88,
      mark3: 88,
      grade: 10
    },
    {
      name: "David",
      rollno: "20ABC003",
      mark1: 68,
      mark2: 68,
      mark3: 58,
      grade: 7
    },
    {
      name: "Sarah",
      rollno: "20ABC004",
      mark1: 68,
      mark2: 68,
      mark3: 58,
      grade: 7
    },
    {
      name: "Emily",
      rollno: "20ABC005",
      mark1: 68,
      mark2: 68,
      mark3: 48,
      grade: 7
    },
    {
      name: "Daniel",
      rollno: "20ABC006",
      mark1: 75,
      mark2: 82,
      mark3: 78,
      grade: 8
    },
    {
      name: "Matthew",
      rollno: "20ABC007",
      mark1: 62,
      mark2: 67,
      mark3: 73,
      grade: 6
    },
    {
      name: "Olivia",
      rollno: "20ABC008",
      mark1: 85,
      mark2: 91,
      mark3: 89,
      grade: 9
    },
    {
      name: "Sophia",
      rollno: "20ABC009",
      mark1: 90,
      mark2: 86,
      mark3: 94,
      grade: 10
    },
    {
      name: "Ethan",
      rollno: "20ABC010",
      mark1: 79,
      mark2: 84,
      mark3: 80,
      grade: 8
    }
  ],
  search: "",
  sortOrder: 'asc',
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(student => student.rollno !== action.payload);
    },
    sortStudents(state) {
      state.students = state.students.slice().sort((a, b) => {
        if (state.sortOrder === 'asc') {
          return a.grade - b.grade;
        } else {
          return b.grade - a.grade;
        }
      });
    },
  },
});

export const { setSearch, setSortOrder, deleteStudent, sortStudents } = studentSlice.actions;

export default studentSlice.reducer;
