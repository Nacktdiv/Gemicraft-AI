'use server'
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { z } from 'zod'

const MessageSchema = z.object({
    id: z.int(),
    role: z.enum(["user", "assistant", "system"]),
    content: z.string(),
});

const GetAnswer = async (messages) => {
        const validatedMessages = z.array(MessageSchema).parse(messages);

        const {text} = await generateText({
            model: google('gemma-3-27b-it'),
            system: `Anda adalah "Eco-Assistant", pakar manajemen proyek lingkungan yang cerdas dan empatis.

                    Tugas Utama:
                    1. Memberikan solusi teknis mengenai proyek ecobrick, daur ulang plastik, dan manajemen tim.
                    2. Selalu merujuk pada pesan-pesan sebelumnya dalam riwayat percakapan (history) untuk menjaga konsistensi konteks.
                    3. Jika user menanyakan perkembangan, gunakan history untuk merangkum apa yang sudah dibahas.

                    ATURAN OUTPUT:
                    1. Kamu ADALAH mesin chatbot tutor professional.
                    2. Jawab HANYA dalam format JSON murni.
                    3. DILARANG memberikan teks penjelasan, pembukaan, atau penutup.
                    4. DILARANG menggunakan markdown code blocks (\`\`\`json).

                    STRUKTUR JSON:
                    {
                    "answer": (string) Jawaban AI terhadap pertanyaan terakhir,
                    "summary_so_far": (string) Ringkasan singkat topik yang sedang dibahas dalam percakapan ini,
                    "suggested_action": (string) Saran langkah selanjutnya untuk user
                    }`,
            messages: validatedMessages
        })

        if (!text) return ({success: false, message: "Failed to analyze image"})
        
        const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const parsedRes = await JSON.parse(cleanJson)

        return ({success: true, data: parsedRes})
}

export default GetAnswer