import postgres from "postgres";
import { Db } from "@ts-safeql-demos/shared/client";

type ID = number;

export function check(client: Db, idsFromParameter: ID[]) {
  const sql = postgres();

  client.query<{ id4: number; name2: string; }>(sql`
    SELECT starship.id as id4, person.name as name2,
    FROM person
    right join starship
    on starship.id = person.id
  `);





  const _id = "1"
  // Conditional expression
  client.query<{ id: number; }>(sql`
    SELECT id FROM starship WHERE id = ${_id}
  `)

  type AgencyIdNameType = { id: number; name: string };
  client.query<AgencyIdNameType>(sql`SELECT id, name FROM person`);

  interface AgencyIdNameInterface {
    id: number;
    name: string;
  }
  client.query<AgencyIdNameInterface>(sql`SELECT id, name FROM person`);
  client.query<{ id: number; name: string }>(sql`SELECT id, name FROM person`);
}
