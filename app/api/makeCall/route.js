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