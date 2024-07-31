import Link from "next/link";

const Conversation = () => {
  return (
    <div className="p-4 rounded-lg border flex flex-col gap-4">
      <span className="text-2xl font-sans">Asaiah Henson</span>
      <Link href={"/inbox/1"} className="text-md text-red-600 hover:underline">
        Go to Conversation
      </Link>
    </div>
  );
};

export default Conversation;
