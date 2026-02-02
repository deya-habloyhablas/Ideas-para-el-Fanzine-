import { Question } from './types';

// Placeholder images - Replace with actual imports or URLs as needed
// Using picsum or specific placeholders to represent the requested images
const IMG_BOTIN = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Restaurant vibe
const IMG_NURIA = "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Abstract art vibe
const IMG_DEFAULT_BG = "https://img.freepik.com/free-vector/red-curtains-theater-stage_107791-1524.jpg"; // Fallback if main image fails

export const QUESTIONS: Question[] = [
  {
    id: 1,
    questionEs: "¿Cómo empieza la letra oficial del himno de España?",
    questionEn: "How do the official lyrics of the Spanish anthem begin?",
    options: [
      { id: 'A', textEs: "En el país del sol…", textEn: "In the land of the sun..." },
      { id: 'B', textEs: "En la patria…", textEn: "In the motherland..." },
      { id: 'C', textEs: "No tiene", textEn: "It has no lyrics" },
    ],
    correctOptionId: 'C',
  },
  {
    id: 2,
    questionEs: "¿Dónde está el restaurante más antiguo del mundo?",
    questionEn: "Where is the oldest restaurant in the world?",
    options: [
      { id: 'A', textEs: "España", textEn: "Spain" },
      { id: 'B', textEs: "México", textEn: "Mexico" },
      { id: 'C', textEs: "Argentina", textEn: "Argentina" },
    ],
    correctOptionId: 'A',
    imageAnswer: IMG_BOTIN, // "Respuesta 1" logic (Assuming Q2 matches logic described)
  },
  {
    id: 3,
    questionEs: "¿Qué famoso pintor trabajó allí?",
    questionEn: "Which famous painter worked there?",
    options: [
      { id: 'A', textEs: "Goya", textEn: "Goya" },
      { id: 'B', textEs: "Picasso", textEn: "Picasso" },
      { id: 'C', textEs: "Dalí", textEn: "Dalí" },
    ],
    correctOptionId: 'A',
  },
  {
    id: 4,
    questionEs: "Oficialmente, si no quiero decir ni alumnos, ni alumnas, digo…",
    questionEn: "Officially, if I don't want to say 'alumnos' or 'alumnas', I say...",
    options: [
      { id: 'A', textEs: "alumnxs", textEn: "alumnxs" },
      { id: 'B', textEs: "alumnes", textEn: "alumnes" },
      { id: 'C', textEs: "alumnado", textEn: "alumnado" },
    ],
    correctOptionId: 'C',
  },
  {
    id: 5,
    questionEs: "¿De qué artista hay una exposición en HK?",
    questionEn: "Which artist has an exhibition in HK?",
    options: [
      { id: 'A', textEs: "Picasso", textEn: "Picasso" },
      { id: 'B', textEs: "Nuria Mora", textEn: "Nuria Mora" },
      { id: 'C', textEs: "Rosa Montero", textEn: "Rosa Montero" },
    ],
    correctOptionId: 'B',
    imageQuestion: IMG_NURIA, // Using as visual aid
  },
  {
    id: 6,
    questionEs: "¿Qué es un tinto en Colombia?",
    questionEn: "What is a 'tinto' in Colombia?",
    options: [
      { id: 'A', textEs: "Vino", textEn: "Wine" },
      { id: 'B', textEs: "Tapa", textEn: "Snack/Tapa" },
      { id: 'C', textEs: "Café", textEn: "Coffee" },
    ],
    correctOptionId: 'C',
  },
  {
    id: 7,
    questionEs: "¿Qué director hispanoparlante tiene 3 Oscar, ha ganado el Goya, y 2 globos de oro?",
    questionEn: "Which Spanish-speaking director has 3 Oscars, a Goya, and 2 Golden Globes?",
    options: [
      { id: 'A', textEs: "Pedro Almodóvar", textEn: "Pedro Almodóvar" },
      { id: 'B', textEs: "Guillermo del Toro", textEn: "Guillermo del Toro" },
      { id: 'C', textEs: "Pedro Amenábar", textEn: "Pedro Amenábar" },
    ],
    correctOptionId: 'B',
  },
  {
    id: 8,
    questionEs: "¿Cuál es el tercer país del mundo con más museos?",
    questionEn: "Which is the third country in the world with the most museums?",
    options: [
      { id: 'A', textEs: "Colombia", textEn: "Colombia" },
      { id: 'B', textEs: "México", textEn: "Mexico" },
      { id: 'C', textEs: "España", textEn: "Spain" },
    ],
    correctOptionId: 'C',
  },
  {
    id: 9,
    questionEs: "A buenas horas…",
    questionEn: "At good hours... (Better late than never sarcasm)",
    options: [
      { id: 'A', textEs: "mangas verdes", textEn: "green sleeves" },
      { id: 'B', textEs: "llegas tarde", textEn: "you arrive late" },
      { id: 'C', textEs: "dios nos ayuda", textEn: "god helps us" },
    ],
    correctOptionId: 'A',
  },
  {
    id: 10,
    questionEs: "¿Por qué se llama Berghain la canción de Rosalía?",
    questionEn: "Why is Rosalía's song called Berghain?",
    options: [
      { id: 'A', textEs: "Porque allí conoció a su ex novio", textEn: "She met her ex there" },
      { id: 'B', textEs: "Porque su novio le robó una canción", textEn: "Her boyfriend stole a song" },
      { id: 'C', textEs: "Porque allí dio su primer concierto", textEn: "She gave her first concert there" },
    ],
    correctOptionId: 'B',
  },
  {
    id: 11,
    questionEs: "¿Qué país tiene la bandera más antigua de América que sigue en uso (adoptada en 1816)?",
    questionEn: "Which country has the oldest flag in the Americas still in use (adopted 1816)?",
    options: [
      { id: 'A', textEs: "México", textEn: "Mexico" },
      { id: 'B', textEs: "Bolivia", textEn: "Bolivia" },
      { id: 'C', textEs: "Argentina", textEn: "Argentina" },
    ],
    correctOptionId: 'C',
  },
  {
    id: 12,
    questionEs: "¿En qué países está el glaciar Perito Moreno?",
    questionEn: "In which countries is the Perito Moreno glacier located?",
    options: [
      { id: 'A', textEs: "España - Andorra", textEn: "Spain - Andorra" },
      { id: 'B', textEs: "Chile - Argentina", textEn: "Chile - Argentina" },
      { id: 'C', textEs: "Argentina - Uruguay", textEn: "Argentina - Uruguay" },
    ],
    correctOptionId: 'B',
  },
];