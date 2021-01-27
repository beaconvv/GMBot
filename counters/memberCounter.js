module.exports = async (client) =>{
    const guild = client.guilds. cache.get('802182438805307423'); //server id
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('803909979215626290'); // channel id
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);

}