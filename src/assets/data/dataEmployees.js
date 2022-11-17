const dataEmployees = [
    { id: 1, firstName: 'Tonny', lastName: 'Stark', entryDate: '01/01/1999', department: 'Engineering', dateOfBirth: '29/05/1970', street: 'Madison Avenue', city: 'NY', state: 'NY', zipCode: '10001', },
    { id: 2, firstName: 'Steven', lastName: 'Rogers', entryDate: '31/12/1999', department: 'Marketing', dateOfBirth: '20/12/1940', street: 'Swann Street', city: 'Washington', state: 'CL', zipCode: '12568', },
    { id: 3, firstName: 'Peter', lastName: 'Parker', entryDate: '31/12/2016', department: 'Marketing', dateOfBirth: '20/12/1962', street: 'Spider Man avenue', city: 'Washington', state: 'CL', zipCode: '11568', },
    { id: 4, firstName: 'Horacio', lastName: 'Caine', entryDate: '01/02/2001', department: 'Marketing', dateOfBirth: '20/12/1974', street: '145rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 5, firstName: 'Calleigh', lastName: 'Duquesne', entryDate: '31/02/2001', department: 'Engineering', dateOfBirth: '20/12/1980', street: '150rd St', city: 'Miami', state: 'FL', zipCode: '11662', },
    { id: 6, firstName: 'Adam', lastName: 'Rodriguez', entryDate: '01/01/1999', department: 'Engineering', dateOfBirth: '29/05/1982', street: '162rd St', city: 'Miami', state: 'FL', zipCode: '11468', },
    { id: 7, firstName: 'Jonathan', lastName: 'Togo', entryDate: '31/12/1999', department: 'Marketing', dateOfBirth: '20/12/1986', street: '188rd St', city: 'Miami', state: 'FL', zipCode: '11582', },
    
]

export default dataEmployees


/**

{ id: 8, firstName: 'Ryan', lastName: 'Wolf', entryDate: '31/12/2011', department: 'Legal', dateOfBirth: '20/12/1996', street: '155rd St', city: 'Miami', state: 'FL', zipCode: '11325', },
    { id: 9, firstName: 'Franck', lastName: 'Tripp', entryDate: '01/02/208', department: 'Engineering', dateOfBirth: '20/12/1994', street: '148rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 10, firstName: 'Natalia', lastName: 'Boa Vista', entryDate: '31/02/2008', department: 'Human Resources', dateOfBirth: '20/12/1998', street: '138rd St', city: 'Miami', state: 'FL', zipCode: '11368', },
    { id: 11, firstName: 'Walter', lastName: 'Simmons', entryDate: '01/01/2005', department: 'Sales', dateOfBirth: '29/05/1989', street: '137rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 12, firstName: 'Yelin', lastName: 'Salas', entryDate: '31/12/2011', department: 'Engineering', dateOfBirth: '20/12/2001', street: '136rd St', city: 'Miami', state: 'FL', zipCode: '12568', },
    { id: 13, firstName: 'Megan', lastName: 'Donner', entryDate: '31/12/2004', department: 'Human Resources', dateOfBirth: '20/03/1999', street: '145rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 14, firstName: 'Timmothe', lastName: 'Speedle', entryDate: '01/02/2002', department: 'Marketing', dateOfBirth: '20/12/1992', street: '112rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 15, firstName: 'Alex', lastName: 'Wood', entryDate: '31/02/2001', department: 'Engineering', dateOfBirth: '20/12/1974', street: '115rd St', city: 'Miami', state: 'FL', zipCode: '11568', },
    { id: 16, firstName: 'Jessi', lastName: 'Cordosa', entryDate: '01/03/2009', department: 'Human Resources', dateOfBirth: '29/03/1992', street: '112rd St', city: 'Miami', state: 'FL', zipCode: '11567', },
    { id: 17, firstName: 'Tom', lastName: 'Loman', entryDate: '31/12/2012', department: 'Legal', dateOfBirth: '20/12/2008', street: '148rd St', city: 'Miami', state: 'FL', zipCode: '11572', },
    { id: 18, firstName: 'Diebencorn', lastName: 'Russel', entryDate: '31/12/2004', department: 'Human Resources', dateOfBirth: '20/12/1992', street: 'Spider Man avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 20, firstName: 'Julie', lastName: 'Finlay', entryDate: '01/02/2001', department: 'Human Resources', dateOfBirth: '20/12/1986', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 19, firstName: 'Sarah', lastName: 'Sidle', entryDate: '01/02/2001', department: 'Human Resources', dateOfBirth: '20/12/1974', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 22, firstName: 'Nick', lastName: 'stocks', entryDate: '31/12/1999', department: 'Legal', dateOfBirth: '20/12/1940', street: 'Swann Street', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 21, firstName: 'Grerg', lastName: 'Sanders', entryDate: '01/01/1999', department: 'Legal', dateOfBirth: '29/05/1970', street: 'Madison Avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 23, firstName: 'Albert', lastName: 'Robbins', entryDate: '31/12/2016', department: 'Legal', dateOfBirth: '20/12/1962', street: 'Spider Man avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 24, firstName: 'David', lastName: 'Hodges', entryDate: '01/02/2001', department: 'Sales', dateOfBirth: '20/12/1974', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 25, firstName: 'David', lastName: 'Phillips', entryDate: '31/02/2001', department: 'Sales', dateOfBirth: '20/12/1980', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 26, firstName: 'Morgan', lastName: 'Brody', entryDate: '01/01/1999', department: 'Sales', dateOfBirth: '29/05/1970', street: 'Madison Avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 27, firstName: 'Henry', lastName: 'Andrew', entryDate: '31/12/1999', department: 'Sales', dateOfBirth: '20/12/1940', street: 'Swann Street', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 28, firstName: 'Jim', lastName: 'Brass', entryDate: '31/12/2016', department: 'Marketing', dateOfBirth: '20/12/1962', street: 'Spider Man avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 29, firstName: 'Gil', lastName: 'Grissom', entryDate: '01/02/2001', department: 'Marketing', dateOfBirth: '20/12/1974', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 30, firstName: 'Catherine', lastName: 'Willows', entryDate: '31/02/2001', department: 'Marketing', dateOfBirth: '20/12/1980', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 31, firstName: 'Wendy', lastName: 'Simms', entryDate: '01/01/1999', department: 'Marketing', dateOfBirth: '29/05/1970', street: 'Madison Avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 33, firstName: 'Sofia', lastName: 'Curtis', entryDate: '31/12/2016', department: 'Engineering', dateOfBirth: '20/12/1962', street: 'Spider Man avenue', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 34, firstName: 'Riley', lastName: 'Adams', entryDate: '01/02/2001', department: 'Engineering', dateOfBirth: '20/12/1974', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 32, firstName: 'Steven', lastName: 'Saintclair', entryDate: '31/12/1999', department: 'Engineering', dateOfBirth: '20/12/1940', street: 'Swann Street', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
    { id: 35, firstName: 'Joan', lastName: 'Freeman', entryDate: '31/02/2001', department: 'Engineering', dateOfBirth: '20/12/1980', street: '145rd St', city: 'Las Vegas', state: 'NV', zipCode: '148569', },
 */