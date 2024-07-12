"use server";
import { prisma } from "../lib/prisma";

export async function createPost(data) {
  const { title, body } = data;

  if (!title || !body) {
    throw new Error("Title and body are required");
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        body,
      },
    });
    return post;
  } catch (error) {
    console.error("Failed to create post", error);
    throw new Error("Failed to create post");
  }
}
