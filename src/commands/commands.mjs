import { SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { clientId, guildId, token } from './config.json';

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

  client.once('ready', () => {
    console.log('Ready!');
  });
  
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    const { commandName } = interaction;
  
    if (commandName === 'ping') {
      await interaction.reply('Pong!');
    } else if (commandName === 'server') {
      await interaction.reply('Server info.');
    } else if (commandName === 'user') {
      await interaction.reply('User info.');
    }
  });
  
  client.login(token);