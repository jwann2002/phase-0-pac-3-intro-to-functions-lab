function whisper(string) {
    return string.toLowerCase();
}

function shout(string) {
    return string.toUpperCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}

module.exports = { logShout };

function logWhisper(string) {
    console.log(string.toLowerCase());
}

module.exports = { logWhisper };

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else {
        // Return a different message or perform other actions if needed
        return "Hi!";
    }
}

module.exports = { sayHiToHeadphonedRoommate };

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return "Hi!";
    }
}

module.exports = { sayHiToHeadphonedRoommate };


