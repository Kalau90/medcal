import Knex from "knex";
import { Model } from "objection";

export const knex = Knex({
  client: "mysql",
  connection: process.env.DATABASE_URL
});

export default Model.knex(knex);
