//? 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to centralize this logic in a utility?

let date = new Date('2003-12-10')

function formatDate(dateStr) {
    let date = new Date(dateStr)
    let formattedDate = date.toLocaleDateString('en-In', {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    return formattedDate
}

let result = formatDate(date)
console.log(result);