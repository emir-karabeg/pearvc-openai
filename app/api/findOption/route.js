// Input: text from airline about phone menu options
// Output: digit response

import { NextResponse } from 'next/server';
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function fetchCompletion(text, retries = 3, delay = 2000) {
    while (retries > 0) {
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-0125",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant designed to output JSON. The user is calling an answering service and has options to choose from. Please return the JSON in the format of {option: 1} or {option: 2} and change the number depending on the menu and what the user desires.",
                    },
                    {
                        role: "user",
                        content: "I am calling an airline to change my flight. Please return me the option that achieves this: " + text,
                    },
                ],
                response_format: { type: "json_object" },
            });
            const response = completion?.choices[0]?.message?.content;
            if (response) {
                return response;
            }
        } catch (error) {
            console.error(`Attempt ${4 - retries} failed: `, error);
        }

        retries--;
        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    throw new Error('Max retries reached, failed to fetch response from OpenAI');
}

export async function POST(req, res) {
    const text = (await req.json()).text;

    console.log(text)

    try {
        const response = await fetchCompletion(text);
        console.log(response);
        return NextResponse.json({ response: response }, { status: 200 });
    } catch (error) {
        console.error('Error fetching OpenAI completion:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


// DB:

// Call ID | User number | Target phone number | Goal | Phone menu option transcription | Waiting for target | Ongoing call