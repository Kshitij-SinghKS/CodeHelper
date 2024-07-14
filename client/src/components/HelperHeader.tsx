import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Save, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CompilerStateType,
  updateCurrentLanguage,
} from "@/redux/slices/CompilerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HelperHeader = () => {
  const [saveLoading, setsaveLoading] = useState(false);
  const [shareBtn,setshareBtn]=useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.CompilerSlice.fullCode
  );
  const handleSaveCode = async () => {
    setsaveLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/compiler/save", {
        fullCode: fullCode,
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setsaveLoading(false);
    }
  };
  const {urlId} = useParams();
  useEffect(() => {
    if(urlId){
      setshareBtn(true);
    }
    else{
      setshareBtn(false);
    }
  }, [urlId]);
  const dispatch = useDispatch();
  const CurrentLanguage = useSelector(
    (state: RootState) => state.CompilerSlice.currentLanguage
  );
  return (
    <div className="__helper_header h-[50px] text-white bg-black p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1 ">
        <Button
          variant="success"
          className="flex justify-center items-center gap-2"
          onClick={handleSaveCode}
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Saving
            </>
          ) : (
            <>
              {" "}
              <Save size={16} />
              Save
            </>
          )}
        </Button>
       { urlId &&(<Dialog>
          <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex justify-center items-center gap-2">
            <Share2Icon />
            Share
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Your Code !!</DialogTitle>
              <DialogDescription className="flex flex-col gap-2">
                <input type="text" value={window.location.href} disabled className="w-full px-2 py-3 rounded bg-slate-800 text-slate-400" />
                Share your code with your friends by copying the URL
             <Button variant="ghost" onClick={()=>{
              window.navigator.clipboard.writeText(window.location.href);
              toast("URL Copied !!")
             }}>Copy This URL</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>)}
        
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small> Language : </small>
        <Select
          defaultValue={CurrentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[110px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
