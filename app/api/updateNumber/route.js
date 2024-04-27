import * as edgedb from "edgedb";
import { NextResponse } from "next/server";

const client = edgedb.createClient();

export async function POST(req, res) { // TODO: Change target_phone_number to actual
    try {
        await client.execute(`
        update Call 
        filter
            .call_id = '121321'
        set {
            target_phone_number := "Updated",
        };
        `)
        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}