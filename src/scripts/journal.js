const journalEntry = {
    date: "",
    concept: "",
    entry: "",
    mood: ""
};

const journalEntries = [
    {
        date: "20/01/20",
        concept: "Building DOM Components",
        entry: "We learned about adding HTML components through javascript. It mostly made sense,  but I still don't fully understand what the DOM is.",
        mood: "Motivated"
    },
    {
        date: "21/01/20",
        concept: "Fetching Data & API",
        entry: "I had a hard time focusing on this lesson and will have to go back and watch a lot of videos.",
        mood: "Frustrated"
    },
    {
        date: "22/01/20",
        concept: "Events",
        entry: "We learned about event listeners. I stayed in the room instead of going to the hackery and actually managed to get a lot done.",
        mood: "Hopeful"
    }

];

journalEntries.push(journalEntry);

console.log(journalEntries);