// Employee objects
const employee1 = {
  name: 'John',
  lastName: 'Doe',
  age: 30,
  companiesWorked: [' Mistsubish', ' Toyota', ' Ford'],
};

const employee2 = {
  name: 'Jane',
  lastName: 'Smith',
  age: 28,
  companiesWorked: ['Logitech', 'Apple', ],
};

// Function to compare employees
function compareEmployees(employee1, employee2) {
  if (employee1.companiesWorked.length > employee2.companiesWorked.length) {
    console.log(`${employee1.name} has worked for more companies.`);
  } else if (employee1.companiesWorked.length < employee2.companiesWorked.length) {
    console.log(`${employee2.name} has worked for more companies.`);
  } else {
    console.log(`${employee1.name} and ${employee2.name} have worked for the same number of companies.`);
  }

  console.log('List of companies:');
  for (const company of employee1.companiesWorked) {
    console.log(`${employee1.name}: ${company}`);
  }
  for (const company of employee2.companiesWorked) {
    console.log(`${employee2.name}: ${company}`);
  }
}

// Compare employees
compareEmployees(employee1, employee2);

