module.exports = {
    name: 'hi',
    description: "this is hi command!",
    execute(message, args){
        message.channel.send('hello dear player');
        
    }
}