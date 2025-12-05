import database from "../database/db.js";
export async function createProductReviewsTable() {
  try {
    const query = `CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL,
    user_id UUID NOT NULL,
    rating DECIMAL(3,2) NOT NULL CHECK (rating BETWEEN 0 AND 5),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);`;
    await database.query(query);
  } catch (error) {
    console.error("❌ Failed To Create Products Reviews Table.", error);
    process.exit(1);
  }
}