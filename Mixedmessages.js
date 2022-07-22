// Function to return random message
// Made more responive to adding or removing elements

const onButtonClick = () => {
    const makeRandomSentence = () => {
        const sentence = [];
        const first = ["Life is", "Life will be", "The future is", "Your existence is"];
        const second = ["a series of", "made up of", "about enjoying"];
        const last = ["moments.", "good times.", "milestones.", "pushing through hardships.", "being in the moment.", "time spent with loved ones."];
        sentence.push(first[Math.floor(Math.random() * first.length)]);
        sentence.push(second[Math.floor(Math.random() * second.length)]);
        sentence.push(last[Math.floor(Math.random() * last.length)]);
        const quote = sentence.join(' ');
        return quote;

    };

    document.querySelector('.inspirational-quote').innerHTML = makeRandomSentence();
}


