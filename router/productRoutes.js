import express from "express";
import {
  createProduct,
  fetchAllProducts,
  updateProduct,
  deleteProduct,
  fetchSingleProduct,
  postProductReview,
  deleteReview,
  fetchAIFilteredProducts,
} from "../controllers/productController.js";
import {
  authorizedRoles,
  isAuthenticated,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/admin/create",
  isAuthenticated,
  authorizedRoles("Admin"),
  createProduct
);
router.get("/", fetchAllProducts);
router.get("/singleProduct/:productId", fetchSingleProduct);
router.put("/post-new/review/:productId", isAuthenticated, postProductReview);
router.delete("/delete/review/:productId", isAuthenticated, deleteReview);
router.put(
  "/admin/update/:productId",
  isAuthenticated,
  authorizedRoles("Admin"),
  updateProduct
);
router.delete(
  "/admin/delete/:productId",
  isAuthenticated,
  authorizedRoles("Admin"),
  deleteProduct
);
router.post("/ai-search", isAuthenticated, fetchAIFilteredProducts);

export default router;