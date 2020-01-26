const journalEntry = {
    date: "",
    concept: "",
    entry: "",
    mood: ""
};

// const journalEntries = [
//     {
//         date: "20/01/20",
//         concept: "Building DOM Components",
//         entry: "We learned about adding HTML components through javascript. It mostly made sense,  but I still don't fully understand what the DOM is.",
//         mood: "Motivated"
//     },
//     {
//         date: "21/01/20",
//         concept: "Fetching Data & API",
//         entry: "I had a hard time focusing on this lesson and will have to go back and watch a lot of videos.",
//         mood: "Frustrated"
//     },
//     {
//         date: "22/01/20",
//         concept: "Events",
//         entry: "We learned about event listeners. I stayed in the room instead of going to the hackery and actually managed to get a lot done.",
//         mood: "Hopeful"
//     }

// ];

// journalEntries.push(journalEntry);

console.log(journalEntries);


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
    });
}

// Invoke the render function
renderJournalEntries(journalEntries)