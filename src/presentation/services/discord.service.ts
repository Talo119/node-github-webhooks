import { envs } from "../../config";

export class DiscordService {

    private readonly discordWebHookUrl: string = envs.DISCORD_WEBHOOK_URL;
    constructor(

    ) {}

    async notify(message: string){
        const body = {
            content: message,
            embeds: [
                {
                    image: {url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWp2M25sdXJvM2ljZ2s4ODY5eHRnb3JxNzJnNndqemJmdjVtNmI0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif'}
                }
            ]
        }

        const resp = await fetch(this.discordWebHookUrl, {
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!resp.ok) {
            console.log('Error sending message to discord.');
            return false;
        }

        return true;
    }
}