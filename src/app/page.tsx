import Card from "@/components/Card";
import Category from "@/components/Category";

export default function Home() {
  return (
    <main className="w-[1600px] mx-auto">
      <Category/>
      <div className="grid grid-cols-6 gap-6">
        <Card/>
      </div>
    </main>
  );
}
