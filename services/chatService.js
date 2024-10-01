import { sql } from "../database/database.js";

const create = async (sender, message) => {
  await sql`
    INSERT INTO messages (sender, message)
    VALUES (${ sender }, ${ message })`;
};

const getResentMessages = async () => {
  try {
    const result = await sql`
      SELECT sender, message
      FROM messages
      ORDER BY id DESC
      LIMIT 5
    `;
    return result;
  } catch (error) {
    console.error("Error fetching recent messages:", error);
    return [];
  }
}

export { create, getResentMessages };