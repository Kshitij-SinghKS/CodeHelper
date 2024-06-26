import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Save, Loader2} from "lucide-react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompilerStateType, updateCurrentLanguage } from "@/redux/slices/CompilerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HelperHeader = () => {
  const [saveLoading,setsaveLoading] = useState(false);
  const navigate = useNavigate();
  const fullCode = useSelector((state:RootState) => state.CompilerSlice.fullCode);
  const handleSaveCode = async()=>{
    setsaveLoading(true);
     try {
      const response = await axios.post("http://localhost:3000/compiler/save",{
        fullCode : fullCode
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
     } catch (error) {
      handleError(error);
     }
     finally{
       setsaveLoading(false);
     }
  }
  const dispatch = useDispatch();
  const CurrentLanguage = useSelector((state:RootState) => state.CompilerSlice.currentLanguage);
  return (
    <div className="__helper_header h-[50px] text-white bg-black p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1 ">
        <Button
          variant="success"
          className="flex justify-center items-center gap-2"
          onClick={handleSaveCode}
          disabled={saveLoading}
        >
         
          {saveLoading ? <><Loader2 className="animate-spin" />Saving</>: <> <Save size={16} />Save</>}
          
        </Button>
        <Button
          variant="secondary"
          className="flex justify-center items-center gap-2"
        >
          {" "}
          <Share2Icon />
          Share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
       <small> Language :  </small>
        <Select defaultValue={CurrentLanguage} onValueChange={(value)=>dispatch(updateCurrentLanguage(value as CompilerStateType["currentLanguage"]))}>
          <SelectTrigger className="w-[110px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue  />
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
