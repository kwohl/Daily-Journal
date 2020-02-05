/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import api from "./data.js";
import renderJournalEntries from "./entriesDOM.js";


const recordButton = document.querySelector("#journalSubmit")
const dateField = document.querySelector("#journalDate")
const conceptField = document.querySelector("#journalConcepts")
const entryField = document.querySelector("#journalEntry")
const moodField = document.querySelector("#journalMood")

const createJournalEntry = (date, concept, entry, mood) => {
  return { 
    'date': date,
    'concept': concept,
    'entry': entry,
    'mood': mood
    }
}

recordButton.addEventListener("click", function () {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createJournalEntry(dateField.value, conceptField.value, entryField.value, moodField.value))
    })
})


api.getJournalEntries().then(renderJournalEntries);