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
  await prisma.post.deleteMany();

  for (const post of initialPosts) {
    await prisma.post.create({
      data: post,
    });
  }
};

seed();
