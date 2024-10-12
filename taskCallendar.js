const day = prompt("Enter a day of the week:");


let task;

switch (day.toLowerCase()) {
    case "monday":
        task = "Finish your assignments.";
        break;
    case "tuesday":
        task = "Work Out 9am to 10.";
        break;
    case "wednesday":
        task = "Go to Work.";
        break;
    case "thursday":
        task = "Review weekly progress.";
        break;
    case "friday":
        task = "Review Lessons.";
        break;
    case "saturday":
        task = "Relax.";
        break;
    case "sunday":
        task = "Go To Chruch and Attend a Mass.";
        break;
    default:
        task = "Invalid day input. Please enter a valid day.";
}

console.log(`Your task for ${day} is: ${task}`);
