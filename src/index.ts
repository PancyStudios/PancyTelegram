import { Client } from "./structures/Client";
import { config } from "dotenv";
config();

export const client = new Client('PancyBot');


client.command('test', (ctx) => {
    ctx.reply('Test command');
})
client.starts()