//  1...........  problem: 1 ..............


// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// solve:

const person = [
    { name: 'Abul', age: 22, gender: 'male' },
    { name: 'Lima', age: 18, gender: 'female' },
    { name: 'kabul', age: 20, gender: 'male' },
    { name: 'Joya', age: 25, gender: 'female' },
    { name: 'Jabul', age: 30, gender: 'male' }
]

const allMales = person?.filter((p) => p?.gender !== 'female');
// console.log(allMales);

const maleNames = allMales?.map((allMale) => allMale?.name);
console.log(maleNames);


//  2...........  problem: 2 ..............


// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


//Solve:

const books = [
    { title: 'রিচার্জ ইয়োর ডাউন ব্যাটারি', author: 'ঝংকার মাহবুব', year: 2018 },
    { title: 'হাবলুদের জন্য প্রোগ্রামিং', author: 'ঝংকার মাহবুব', year: 2016 },
    { title: 'হাতে কলমে জাভাস্ক্রিপ্ট', author: 'জুনায়েদ আহমেদ', year: 2020 },
    { title: 'প্রোগ্রামিং কনটেস্ট ডেটা স্ট্রাকচার ও অ্যালগরিদম', author: 'মো: মাহবুবুল হাসান', year: 2016 },
    { title: 'পাইথন দিয়ে প্রোগ্রামিং শেখা', author: 'তামিম শাহরিয়ার সুবিন', year: 2017 }
]

const getBookTitles = (bookTitles) => {
    //    return bookTitles?.map((b)=> b?.year)
    return bookTitles?.map((b) => b?.title)

}

const titles = getBookTitles(books);
console.log(titles)
// console.log(year)

//  3...........  problem: 4 ..............

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


const cars = [
    { make: "BMW", model: "i7", year: 2025 },
    { make: "Toyota", model: "Harrier", year: 1997 },
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Tesla", model: "Model X", year: 2016 },
    { make: "Honda", model: "Civic", year: 2012 }
]

const getSortedCarsByYear = (allCars) => {
    return allCars?.sort((asc, dsc) => asc?.year - dsc?.year) // asc: (a.y-d.y)  //dsc: (d.y-a.y)
}

const sortedCars = getSortedCarsByYear(cars);
console.log(sortedCars)


//  4...........  problem: 8 ..............

// 8. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


//solve:

const numbers = [1, 2, 3, 4, 5, 6, 4, 3, 5, 3, 5, 7, 8];

const getOnlyUniqueNumbers = (value, index, array) => {
    return array?.indexOf(value) === index;
}


const unique = numbers.filter(getOnlyUniqueNumbers);
console.log(unique)



//  5...........  problem: 9 ..............


// 09. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.


//solve:

const num = [10, 25, 13, 4, 17, 30, 7, 28]

const getMaximumNumber = (numArray) => {
    return Math.max(...numArray)
}

const maximumValue = getMaximumNumber(num)
console.log(maximumValue)
