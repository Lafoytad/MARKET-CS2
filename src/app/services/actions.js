"use server";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function createPost(data) {
  console.log(data);
  const { title, body } = data;
  const post = await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  return post;

  //redirect(`/store/home${post}`);
}
