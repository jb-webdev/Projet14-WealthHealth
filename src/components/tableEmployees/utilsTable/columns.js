import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'First name',
        Footer: 'First name',
        accessor: 'firstName',
    },
    {
        Header: 'Last name',
        Footer: 'Last name',
        accessor: 'lastName',
    },
    {
        Header: 'Entry date',
        Footer: 'Entry date',
        accessor: 'entryDate',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }
    },
    {
        Header: 'Department',
        Footer: 'Department',
        accessor: 'department',
    },
    {
        Header: 'dateOfBirth',
        Footer: 'dateOfBirth',
        accessor: 'dateOfBirth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }
    },
    {
        Header: 'Street',
        Footer: 'Street',
        accessor: 'street',
    },
    {
        Header: 'City',
        Footer: 'City',
        accessor: 'city',
    },
    {
        Header: 'Zip code',
        Footer: 'Zip code',
        accessor: 'zipCode',
    },
]
