import MenuBar from "@/components/MenuBar/MenuBar";
import ToolBar from "@/components/ToolBar/ToolBar";
import Canvas from "@/components/Canvas/Canvas";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <MenuBar />
        <ToolBar />
        <Canvas />
      </div>
    </main>
  );
}
