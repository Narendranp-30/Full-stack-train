import { useEffect, useState } from "react";
import Studenttable from "./Studenttable";
import Studentsearch from "./Studentsearch";
import Header from "./Header";

const studentDetails = [
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
]

const Studentdata = () => {
    const [data, setData] = useState(studentDetails);
    const [table, setTable] = useState(studentDetails);
    const [search, setSearch] = useState("");
    const [sor, setSor] = useState();

    useEffect(() => {
        if (sor === "low") {
            setData([...table].sort((a, b) => b.grade - a.grade));
        } else {
            setData([...table].sort((a, b) => a.grade - b.grade));
        }
    }, [sor, table]);

    useEffect(() => {
        if (search === "") {
            setData([...table]);
        } else {
            setData(table.filter((x) => x.rollno === search));
        }
    }, [search, table]);

    const deleteStudent = (rollNo) => {
        setTable(table.filter(student => student.rollno !== rollNo));
    };

    return (
        <>
            <Header setSearch={setSearch} />
            <Studenttable data={data} setSor={setSor} deleteStudent={deleteStudent} />
        </>
    );
};

export default Studentdata;
