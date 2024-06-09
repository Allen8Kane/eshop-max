import ProductCard from "@/components/ProductCard";
import { getProductById } from "../actions";

const Product = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(+params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard
        title={product.title}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </main>
  );
};

export default Product;
