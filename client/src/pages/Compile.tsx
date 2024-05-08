import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compile() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)]  min-w-[350px]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] flex items-center justify-center min-w-[350px]"
        defaultSize={50}
      >
        Right
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
