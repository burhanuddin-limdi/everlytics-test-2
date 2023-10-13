export class TableData {
  attributes!: {
    path: string;
  };
  created_at!: number;
  created_by!: string;
  last_run!: string | number;
  no_of_runs!: number;
  notebook_id!: string;
  notebook_name!: string;
  schedule!: {
    period: string | null;
    until: string | null;
    time: string | null;
  };
  status!: string;
  updated_at!: number;
  updated_by!: string;
}

const x = {
  attributes: { path: "/notebooks/admin/" },
  created_at: 1687778541000,
  created_by: "admin",
  last_run: "-",
  no_of_runs: 0,
  notebook_id: "39cee91c-48e4-4d1c-9037-fe81b31ebddc",
  notebook_name: "2023-06-26_11:22:21_admin.ipynb",
  schedule: { period: null, until: null, time: null },
  status: "Not Scheduled",
  updated_at: 1687778541000,
  updated_by: "admin",
};
