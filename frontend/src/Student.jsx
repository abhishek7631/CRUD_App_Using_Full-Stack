import { useEffect } from "react";
import axios from "axios";

export default function Student() {
  useEffect(() => {
    axios
      .get("http://localhost:8181/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button className="btn btn-success">Add +</button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
