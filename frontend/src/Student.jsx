import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Student() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8181/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.ID}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.Age}</td>
                  <td>{data.Status}</td>
                  <td>
                    <Link to={`update/${data.ID}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
