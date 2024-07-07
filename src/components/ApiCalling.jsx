import React, { useState } from "react";
import axios from "axios";

export const ApiCalling = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleApiCalling = async () => {
    await axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log("res=>", res.data.data);
        setData(res.data.data);
        setShowTable(true);
      });
  };

  return (
    <div className="w-full h-auto bg-blue-300 text-center p-10">
      {!showTable && (
        <div>
          <h1 className="text-2xl text-white">Click to get Employee details</h1>
          <button
            className="bg-orange-400 p-2 rounded-lg mt-5 text-white text-2xl shadow-xl font-semibold hover:bg-orange-500"
            onClick={handleApiCalling}
          >
            Click Here
          </button>
        </div>
      )}

      {showTable && (
        <table className="w-full border-collapse border border-slate-500  table-fixed border-spacing-8 text-gray-700 ">
          <caption class="caption-top p-4">
            Employee Details:
          </caption>
          <thead>
            <tr className="border">
              <th className="border p-2 border-slate-600">Employee Id</th>
              <th className="border p-2 border-slate-600">Employee Name</th>
              <th className="border p-2 border-slate-600">Employee Salary</th>
              <th className="border p-2 border-slate-600">Employee Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 border-slate-600 ">{item.id}</td>
                <td className="border p-2 border-slate-600">
                  {item.employee_name}
                </td>
                <td className="border p-2 border-slate-600">
                  {item.employee_salary}
                </td>
                <td className="border p-2 border-slate-600">
                  {item.employee_age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
