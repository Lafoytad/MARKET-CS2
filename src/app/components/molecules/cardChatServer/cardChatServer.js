import { getAllPosts } from "@/app/services/posts";
import CardChatClient from "@/app/components/molecules/cardChatClient/cardChatClient";

const CardBuy = async () => {
  const posts = await getAllPosts();

  return <CardChatClient initialPosts={posts.reverse()} />;
};

export default CardBuy;
