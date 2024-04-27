import * as edgedb from "edgedb";
import { NextResponse } from "next/server";

const client = edgedb.createClient();

export async function POST(req, res) { // TODO: Change goal to actual
    try {
        await client.execute(`
        update Call 
        filter
            .call_id = '121321'
        set {
            goal := "Updated",
        };
        `)
        return NextResponse.json({ ok: true }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}