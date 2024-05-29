import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/CompilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Compile() {
  const loadCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/compiler/load", {
        urlId: urlId,
      });
      dispatch(updateFullCode(response.data.fullCode))
      console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  }
  const {urlId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if(urlId){
      loadCode();
    }
  }, [urlId]);
  console.log(urlId);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)]  min-w-[375px]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)]  min-w-[375px]"
        defaultSize={50}
      >
        <RenderCode/>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
