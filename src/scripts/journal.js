const journalEntry = {
    date: "",
    concept: "",
    entry: "",
    mood: ""
};

const getEntries = () => {
fetch('http://localhost:8088/entries') // Fetch from the API
    .then(resp => resp.json())  // Parse as JSON
    .then(entries => {
        renderJournalEntries(entries)
        // What should happen when we finally have the array?
        });
};

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <section class="entry">
    <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Concept: ${journalEntry.concept}</li>
        <li>Entry: ${journalEntry.entry}</li>
        <li>Mood: ${journalEntry.mood}</li>
    </ul>
    </section>

    `;
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entriesContainer = document.querySelector(".entryLog");

        entries.forEach(entry => {
            const journalHtml = makeJournalEntryComponent(entry);
            entriesContainer.innerHTML += journalHtml;
        })
}

// Invoke the render function
// renderJournalEntries(journalEntries)

getEntries();