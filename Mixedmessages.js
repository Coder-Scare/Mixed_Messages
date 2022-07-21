const firstMessage = "Life is ";

const secondMessage =  () => {
    const message = ["a series of", "made up of", "about enjoying"];
    const secondMessageRand = message[Math.floor(Math.random() * 3)];
    return secondMessageRand;
}

const lastMessage =  () => {
    const message = ["moments.", "good times.", "milestones.", "pushing through hardships.", "being in the moment.", "time spent with loved ones."];
    const lastMessageRand = message[Math.floor(Math.random() * 6)];
    return lastMessageRand;
}



