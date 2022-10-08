import Realm from 'leoric';
import { Nullable } from "@ts-safeql-demos/shared/client";
import { sql } from "../../../packages/sql-tag/src";
import { IBone } from "../typings";

type ID = number;

export default function check(client: IBone, idsFromParameter: ID[]) {

  client.query<{ name: string; pid: number; }>(sql`
    SELECT person.name, person.id as pID from starship
    join person
    on person.id = starship.id
    ;
  `);

  // SELECT person.id, person.name, starship.captain_id
  //   FROM person
  //   left join starship on starship.id = person.id
  //   WHERE TRUE
  //     AND person.id = ${idsFromParameter[0] > 5 ? 5 : 5}
  //     AND person.id = ANY(${idsFromParameter})
  //     AND person.name = ${"John"} -- string literal
}


async function main() {
  const realm = new Realm({
    host: 'localhost',
    user: 'postgres',
    database: 'postgrespw'
  });
  await realm.connect();

  // 发现 leoric 泛型有一些需要改进的地方，先看那上面本地 mock 后的 query 案例吧

  //   const SELECT_USER_IDS_SQL = `
  //   SELECT count(*) AS count FROM member_payment_orders AS orders
  //   LEFT JOIN users ON orders.user_id = users.id
  //   WHERE orders.status = :status AND users.type = :userType
  //   ${order_type ? 'AND orders.order_type = :orderType' : ''}
  // `;

  //   const { rows } = await bone.query(SELECT_USER_IDS_SQL, {
  //     replacements: {
  //       userType,
  //       status: ORDER_STATUS.finished,
  //       orderType: order_type,
  //     },
  //   });
  // return rows[0].count;
}


main()