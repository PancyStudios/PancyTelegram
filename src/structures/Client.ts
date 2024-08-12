import { Telegraf } from "telegraf";

export class Client extends Telegraf {
    user: string;

    constructor(User: string) {
        super(process.env.telegramToken as string);
        this.user = User;
    }

    starts() {
        this.launch().then(() => {
        console.log("Bot started");
        })
        .catch((err) => {
            console.error(err);
        })
    }
}