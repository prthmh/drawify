import MenuBar from "@/components/MenuBar/MenuBar";
import ToolBar from "@/components/ToolBar/ToolBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <MenuBar />
        <ToolBar />
      </div>
    </main>
  );
}
