import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts = [
  {
    title: "Матвей",
    body: "Для меня каждый процесс разработки веб-интерфейсов в онлайн-среде — это маленькое путешествие в мир творчества и инноваций.",
  },
  {
    title: "Кирилл",
    body: "Никогда не видел кс2 в браузере. Продолжай в том же духе)",
  },
  {
    title: "Евгений",
    body: "Настанет время, когда можно будет запустить CS2 в браузере. Жду не дождусь.",
  },
  {
    title: "ИванЗоло",
    body: "Как вывести скины?",
  },
];

const seed = async () => {
  try {
    console.log("Deleting existing posts...");
    await prisma.post.deleteMany();
    console.log("Existing posts deleted.");

    for (const post of initialPosts) {
      console.log(`Creating post: ${post.title}`);
      await prisma.post.create({
        data: post,
      });
    }

    console.log("Seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
