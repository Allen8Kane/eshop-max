"use server";

import { PrismaClient, Prisma } from "@prisma/client";

const db = new PrismaClient();

const getProducts = async () => {
  const res = await db.product.findMany();
  return res;
};

const createProduct = async (product: Prisma.ProductCreateInput) => {
  if (!product.image) {
    return;
  }

  await db.product.create({
    data: {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    },
  });

  const products = await db.product.findMany();
  return products;
};

const getProductById = async (id: number) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

const deleteProductById = async (id: number) => {
  await db.product.delete({
    where: {
      id,
    },
  });
};

export { getProducts, createProduct, getProductById, deleteProductById };
