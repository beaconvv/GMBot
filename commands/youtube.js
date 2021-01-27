module.exports = {
    name: 'youtube',
    description: 'this is the youtube command',

    execute(message, args){
        message.channel.send('https://www.youtube.com');
    }
}