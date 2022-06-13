import { ColumnFilter } from "./ColumnFilter"
export const COLUMNS = [
  
    {
        Header: "Plant",
        accessor: "Plant",
        disableFilters: true,
        Filter: ColumnFilter
    },
    {
        Header: "Department",
        accessor: "Department",
        Filter: ColumnFilter
    },
    {
        Header: "Machine",
        accessor: "Machine",
        Filter: ColumnFilter
    },
    {
        Header: "OP No",
        accessor: "OP No",
        Filter: ColumnFilter
    },
    {
        Header: "Date",
        accessor: "DATE",
        Filter: ColumnFilter
    },

{
    Header: "Complaint Details",
    accessor: "Complaint Details",
    Filter: ColumnFilter
},

{
    Header: "Cause of Breakdown",
    accessor: "Cause of Breakdown",
    Filter: ColumnFilter
},

{
    Header: "Breakdown Time",
    accessor: "Breakdown Time",
    Filter: ColumnFilter
},
]