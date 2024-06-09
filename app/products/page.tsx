import Card from "@/components/Card";
import { getProducts } from "./actions";

const Products = async () => {
  const products = await getProducts();

  return (
    <main>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              image={p.image}
              price={p.price}
              link={`products/${p.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
