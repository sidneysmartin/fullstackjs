// Interface com método
interface Character {
  playerName: string;
  race: string;
  classCharacter: string;
  power: number;
  sayHi(): void;
}

// Função para exibir informações do personagem
function displayCharacterInfo(character: Character): void {
  console.log(`Player Name: ${character.playerName}`);
  console.log(`Race: ${character.race}`);
  console.log(`Class Character: ${character.classCharacter}`);
  console.log(`Power: ${character.power}`);
  character.sayHi(); // Chama o método sayHi do objeto character
}

// Objeto character conforme a interface
const character: Character = {
  playerName: "Killua",
  race: "Blood Elf",
  classCharacter: "Assassin",
  power: 100,
  sayHi(): void {
    console.log("Your life is mine!");
  },
};

// Chama a função para exibir as informações do personagem
displayCharacterInfo(character);

// ----------------------------------
// Interface #3 (Interface with method properties)
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "The Animals",
  singerName: "Martin Garrix",
  printSongInfo: (songName, singerName) => {
    return `Song: (${songName}) Singer: (${singerName})`;
  },
};

console.log(song1.printSongInfo("Wonderwall", "Oasis"));
// ---------------------------
