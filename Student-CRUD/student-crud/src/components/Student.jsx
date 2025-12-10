import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [student, setStudent] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    const newStudent = { name, address };
    console.log(newStudent);

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    }).then(() => {
      console.log("New Student added");

      // Clear form after submit
      setName("");
      setAddress("");

      // Reload student list after adding
      fetch("http://localhost:8080/student/getAll")
        .then((res) => res.json())
        .then((result) => {
          setStudent(result);
        });
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudent(result);
      });
  }, []);

  return (
    <center>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off">
        <h1>Add Student</h1>

        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h1>Add Address</h1>

        <TextField
          label="Student Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit
        </Button>
      </Box>

      <h1>Student Info</h1>

      <Paper elevation={3} style={{ padding: "20px", width: "50%" }}>
        {student.map((stu, index) => (
          <Paper
            key={index}
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
            <b>Name:</b> {stu.name} <br />
            <b>Address:</b> {stu.address}
          </Paper>
        ))}
      </Paper>
    </center>
  );
}
