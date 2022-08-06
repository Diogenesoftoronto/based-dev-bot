// Require the necessary discord.js classes using the es module syntax
import { Client, GatewayIntentBits } from 'discord.js'
import { token } from './config.json'
import express from 'express'
// api logic
const app = express()
// commands for discord bot

// discord bot logic

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
