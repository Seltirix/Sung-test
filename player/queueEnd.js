module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} -Il n'y a plus de musique en attente !`);
};
