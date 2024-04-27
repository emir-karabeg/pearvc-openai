import * as edgedb from "edgedb";
import { NextResponse } from "next/server";

const client = edgedb.createClient();

export async function POST(req, res) { // TODO: Change data to actual
    try {
        await client.execute(`
        insert Call {
            call_id := "121321",
            user_number := "+17144255363",
            target_phone_number := "+18773212978",
            goal := "Change my flight",
            phone_menu_option_transcription := "Press 1 to change your flight, press 2 to cancel your flight",
            waiting_for_target := true,
            ongoing_call := true,
        }`)
        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


// Call agent
// Tell agent number (type on keypad)
// Tell agent what you want to do

// DB STORES CALL SID

// Agent calls airline
// Drops your call
// Agent hears options
// Transcribes options and formats
// Query GPT with options (text + goal)

// GPT

// Get back digit response
// Send digit response to airline
// Wait for human
// Human responds
// Call user

// Build simulation phone number (United) options 1 and 2 -> put on hold and play music for 1 minute -> respond with human talking (pick up after 3 seconds)