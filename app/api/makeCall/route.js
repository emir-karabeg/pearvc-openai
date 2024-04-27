import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req, res) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const client = twilio(accountSid, authToken);
    
    try {
        const call = await client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+17144255363',
        from: '+18773212978',
        });
        return NextResponse.json({ callSid: call.sid }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// Call agent
// Tell agent number
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