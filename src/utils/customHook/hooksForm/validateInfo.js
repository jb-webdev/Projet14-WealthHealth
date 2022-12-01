// fonction qui permet de valide nos inputs du formulaire création employé
export default function validateInfo(values) {
    let errors = {}
    // firstName
    if (!values.firstName) {
        errors.firstName = "FirstName required"
    } else if (values.firstName.length < 3) {
        errors.firstName = "Firstname needs to be 3 characters or more"
    }
    // lastName
    if (!values.lastName) {
        errors.lastName = "Lastname required"
    } else if (values.lastName.length < 3) {
        errors.lastName = "Lastname needs to be 3 characters or more"
    }
    // birthdate
    if (!values.dateOfBirth) {
        errors.dateOfBirth = "BirthdayDate required"
    }
    // entry date
    if (!values.entryDate) {
        errors.entryDate = "Entry Date required"
    }
    // departement job
    if (!values.department) {
        errors.departement = "Departement required"
    }
    // street
    if (!values.street) {
        errors.street = "Street required"
    } else if (values.street.length < 3) {
        errors.street = "Street needs to be 3 characters or more"
    }
    // City
    if (!values.city) {
        errors.city = "City required"
    } else if (values.city.length < 3) {
        errors.city = "City needs to be 3 characters or more"
    }
    // State
    if (!values.state) {
        errors.state = "State required"
    }
    // zip code
    if (!values.zipCode) {
        errors.zipCode = "zipcode required"
    } else if (values.zipCode.length < 5) {
        errors.zipCode = "Zip code needs to be 5 characters or more"
    }

    return errors
}
