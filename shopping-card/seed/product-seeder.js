var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

var products = [
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/sgZLoyg3KKeHvyHel8tZ2TIkXRw=/fit-in/900x600/filters:no_upscale()/pic3536616.jpg",
        title: "Terraforming Mars",
        description: "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.",
        price: 120
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/zHcflei59RfJMHw6ZzXSXRYE53k=/fit-in/900x600/filters:no_upscale()/pic5253984.jpg",
        title: "Forgotten Waters",
        description: "Forgotten Waters is a Crossroads Game set in a world of fantastical pirate adventure. In it, players take on the role of pirates sailing together on a ship, attempting to further their own personal stories as well as a common goal. The world of Forgotten Waters is silly and magical, with stories designed to encourage players to explore and laugh in delight as they interact with the world around them. It's a game in which every choice can leave a lasting impact on the story, and players will want turn over every rock just to see what they find. Forgotten Waters features five scenarios and a massive location book that provides players with tons of choices wherever they go.",
        price: 210
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/UkSkAYiCwlcImKdgdhLqfBvq4Rs=/fit-in/900x600/filters:no_upscale()/pic4815198.jpg",
        title: "Dune",
        description: "Imagine you can control the forces of a noble family, guild, or religious order on a barren planet which is the only source for the most valuable substance in the known universe. Imagine you can rewrite the script for one of the most famous science fiction books of all time. Who will control DUNE? Become one of the characters and their forces from the book and... You decide!",
        price: 140
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/BwJJTrofiaH0Muxuo5rv0VCmuCY=/fit-in/900x600/filters:no_upscale()/pic2582929.jpg",
        title: "Codenames",
        description: "Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES. In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin. Codenames: Win or lose, it's fun to figure out the clues.",
        price: 70
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/gN-FTZ2DCgJKNOw0eiew2FVewbI=/fit-in/900x600/filters:no_upscale()/pic4768766.jpg",
        title: "Watergate",
        description: "In the two-player game Watergate, one player represents the Nixon administration and tries not to resign before the end of the game while the other player represents The Washington Post and tries to show the connections between Nixon and some of his informers.",
        price: 90
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/-nnzXSm6wDQvH5lckCzUtaaprGE=/fit-in/900x600/filters:no_upscale()/pic2437871.jpg",
        title: "Gloomhaven",
        description: "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.",
        price: 140
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/OniarfOlN9J8YHV22RMqXLBRllc=/fit-in/900x600/filters:no_upscale()/pic2343715.jpg",
        title: "Sapiens",
        description: "The time has come for the tribe to leave its shelter and head for new lands. As the chief of your clan, it's up to you to guide your prehistoric people through the valley: Take advantage of the environment, pick and hunt for food, discover big and safe caverns for the upcoming winter, gather your tribe and discover the valley!",
        price: 110
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/KzUut4GgRXPc0zrFcEJhh4u2Ueo=/fit-in/900x600/filters:no_upscale()/pic3548175.jpg",
        title: "GAIA Project",
        description: "Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. In addition, Gaia planets can be used by all factions for colonization, and Transdimensional planets can be changed into Gaia planets.",
        price: 228
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/M9tB8ibeYWAad_HZE6XWIvN00KM=/fit-in/900x600/filters:no_upscale()/pic4649397.jpg",
        title: "Maracaibo",
        description: "Maracaibo, the new strategy game for 1-4 players by Alexander Pfister, is set in the Caribbean during the 17th century. The players try to increase their influence in three nations in four rounds with a play time of 40 minutes per player.",
        price: 170
    }),
    new Product({
        imageSrc: "https://cf.geekdo-images.com/imagepage/img/r6sY9GDaiavqrxY25QjhNB68sBM=/fit-in/900x600/filters:no_upscale()/pic4458123.jpg",
        title: "Wingspan",
        description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions).",
        price:170
    })

];

for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if (i === products.length-1) {
            mongoose.disconnect();
        }
    });
}