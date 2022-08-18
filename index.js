// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
//✔ returns all drivers that match the passed in name
const findMatching = (a,b) => a.filter(a => a.toLowerCase() === b.toLowerCase())
//✔ returns a driver if beginning provided letters match
const fuzzyMatch = (a,b) => a.filter(a => a.charAt(0) === b.charAt(0))
//✔ accesses the data structure to check if name matche
const matchName = (a,b) => a.filter(a => a.name === b)