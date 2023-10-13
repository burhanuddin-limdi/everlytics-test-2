import { FC, useEffect, useState } from "react";
import { getTabelData } from "../services/tabel-data.service";
import { TableData } from "../types/table-data";
import moment from "moment";

const Table: FC = () => {
  getTabelData();

  const [data, setData] = useState<TableData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTabelData();
      console.log(result);
      if (result) {
        setData(result);
      } else {
        console.error("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const fields = [
    "notebook_name",
    "updated_at",
    "updated_by",
    "created_at",
    "last_run",
    "created_by",
    "no_of_runs",
    "notebook_id",
    "status",
  ];

  return (
    <table>
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.notebook_id}>
            {fields.map((field) => {
              if (!row[field]) return <td key={field}>-</td>;
              if (
                field === "updated_at" ||
                field === "created_at" ||
                field === "last_run"
              )
                return (
                  <td key={field}>
                    {moment(row[field]).format("MMM Do YYYY h:mm a") !=
                    "Invalid date"
                      ? moment(row[field]).format("MMM Do YYYY h:mm a")
                      : row[field]}
                  </td>
                );
              return <td key={field}>{row[field]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
