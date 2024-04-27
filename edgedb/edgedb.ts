import { Call } from "./../dbschema/interfaces";
import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js";

const client = edgedb.createClient();

async function main() {
  // result will be inferred as Movie | null
  // result will be inferred based on the query
  const result = await e
    .select(e.Call, () => ({
      //   title: true,
      //   actors: () => ({ name: true }),
      //   filter_single: { title: "Iron Man 2" },
    }))
    .run(client);

  console.log(JSON.stringify(result, null, 2));
}

main();
