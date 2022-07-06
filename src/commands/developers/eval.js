import { SlashCommandBuilder } from '@discordjs/builders';
import { Modal, TextInputComponent, showModal } from 'discord-modals';

export default {
    name: "eval",
    category: 'Developers',
    view: false,
    devsOnly: true,
    data: new SlashCommandBuilder().setName("eval").setDescription("「🧙 Devs」・Evaluate de códigos em JavaScript para meus desenvolvedores"),
    run: async(client, interaction) => {

        let modalEval = new Modal()

        .setTitle('Eval')
        .setCustomId('eval_modal')
        .addComponents(
            new TextInputComponent()
            .setCustomId('code')
            .setLabel('Digite o código abaixo')
            .setStyle('LONG')
            .setPlaceholder('😅 Códiguin...')
            .setRequired(true)
        )

        showModal(modalEval, {
            client,
            interaction
        })
    
    }
}