/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import api from "./data.js";
import renderJournalEntries from "./entriesDOM.js";


const createJournalEntry = (date, concept, entry, mood) => {

  return { 
    'date': date,
    'concept': concept,
    'entry': entry,
    'mood': mood
    }
}

const recordButton = document.querySelector("#journalSubmit")

recordButton.addEventListener("click", function () {
    
    const dateField = document.querySelector("#journalDate")
    const conceptField = document.querySelector("#journalConcepts")
    const entryField = document.querySelector("#journalEntry")
    const moodField = document.querySelector("#journalMood")

    const newEntry = createJournalEntry(dateField.value, conceptField.value, entryField.value, moodField.value)

    api.saveJournalEntry(newEntry)
        .then(api.getJournalEntries()).then(renderJournalEntries())
    
})



api.getJournalEntries().then(renderJournalEntries);

const moodButtons = document.getElementsByName("mood");
const entriesContainer = document.querySelector(".entryLog");

moodButtons.forEach(button => {
    button.addEventListener("click", event => {
        entriesContainer.innerHTML = ""

        const moodValue = event.target.value
        
        api.getJournalEntries().then(entriesArray => {
            const filteredEntries = entriesArray.filter(entry => entry.mood.toUpperCase() === moodValue.toUpperCase())

    renderJournalEntries(filteredEntries)
        })
        
    })     
})



const entryLog = document.querySelector(".entryLog")

entryLog.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteButton--")) {
        //isolate id of entry to remove
        const entryToDelete = event.target.id.split("--")[1]

        //TODO: invoke delete method, get all entries, and render them
        api.deleteJournalEntry(entryToDelete)
            .then(api.getJournalEntries)
            .then(renderJournalEntries)
    }
})


