import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// 1. Inisialisasi Provider
const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyBJhbOQvMWT0ewwI7ltl0sySIbwtrrZ5Xs",
});

// 2. Jalankan generateText
const { text } = await generateText({
  model: google('gemma-3-27b-it'), // Nama model Gemma yang ada di Google AI Studio
  prompt: 'Halo! Apa itu Gemicraft?',
});

console.log("Respon Gemma (AI SDK):", text);