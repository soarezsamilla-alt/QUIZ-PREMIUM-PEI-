'use server';
/**
 * @fileOverview Provides a Genkit flow for generating personalized PEI recommendations based on quiz answers.
 *
 * - personalizedPeiRecommendation - A function that handles the personalized PEI recommendation process.
 * - PersonalizedPeiRecommendationInput - The input type for the personalizedPeiRecommendation function.
 * - PersonalizedPeiRecommendationOutput - The return type for the personalizedPeiRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizAnswerSchema = z.object({
  tag: z.string().describe('The category tag of the quiz question.'),
  question: z.string().describe('The quiz question asked.'),
  selectedOptionText: z.string().describe('The text of the option selected by the user.'),
});

const PersonalizedPeiRecommendationInputSchema = z.object({
  answers: z.array(QuizAnswerSchema).describe('An array of answers from the PEI quiz.'),
});
export type PersonalizedPeiRecommendationInput = z.infer<typeof PersonalizedPeiRecommendationInputSchema>;

const PersonalizedPeiRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('A personalized recommendation for PEI models and resources based on the quiz answers.'),
});
export type PersonalizedPeiRecommendationOutput = z.infer<typeof PersonalizedPeiRecommendationOutputSchema>;

export async function personalizedPeiRecommendation(input: PersonalizedPeiRecommendationInput): Promise<PersonalizedPeiRecommendationOutput> {
  return personalizedPeiRecommendationFlow(input);
}

const personalizedPeiRecommendationPrompt = ai.definePrompt({
  name: 'personalizedPeiRecommendationPrompt',
  input: { schema: PersonalizedPeiRecommendationInputSchema },
  output: { schema: PersonalizedPeiRecommendationOutputSchema },
  prompt: `Você é um especialista em educação inclusiva, com foco em Planos Educacionais Individuais (PEI).
Seu objetivo é fornecer uma recomendação personalizada para a professora, com base nas respostas do quiz.
Analise as respostas para entender o perfil da professora, seus desafios, como ela costuma resolver e suas maiores necessidades.
A recomendação deve ser encorajadora, relevante e específica para os problemas identificados.
Conclua com uma frase que a incentive a explorar os recursos oferecidos.

Respostas do Quiz:
{{#each answers}}
  - Categoria: {{{tag}}}
  - Pergunta: {{{question}}}
  - Resposta selecionada: {{{selectedOptionText}}}
{{/each}}

Com base nessas informações, qual seria a melhor recomendação para essa professora?`
});

const personalizedPeiRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedPeiRecommendationFlow',
    inputSchema: PersonalizedPeiRecommendationInputSchema,
    outputSchema: PersonalizedPeiRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await personalizedPeiRecommendationPrompt(input);
    return output!;
  }
);
