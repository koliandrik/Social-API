const usernames = [
    "johndoe",
    "janedoe",
    "johndoe1",
    "janedoe1",
    "johndoe2",
    "janedoe2",
    "johndoe3",
    "janedoe3",
];

const thoughts = [
    {
        thoughtText: "Hello World!",
        username: "johndoe"
    },
    {
        thoughtText: "Goodbye World!",
        username: "janedoe"
    },
    {
        thoughtText: "Hello World!",
        username: "johndoe1"
    },
    {
        thoughtText: "Goodbye World!",
        username: "janedoe1"
    },
    {
        thoughtText: "Hello World!",
        username: "johndoe2"
    },
    {
        thoughtText: "Goodbye World!",
        username: "janedoe2"
    },
    {
        thoughtText: "Hello World!",
        username: "johndoe3"
    },
    {
        thoughtText: "Goodbye World!",
        username: "janedoe3"
    },
];

const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "msn.com",
    "comcast.net",
    "sbcglobal.net",
    "verizon.net",
    "outlook.com",
    "icloud.com",
];

const getRandomDomain = () => {
    const randomIndex = Math.floor(Math.random() * domains.length);
    return domains[randomIndex];
};

const getRandomEmail = (username) => {
    const domain = getRandomDomain();
    return `${username}@${domain}`;
};

const users = usernames.map((username) => {
    return {
        username,
        email: getRandomEmail(username),
    };
});

module.exports = { users, thoughts };


