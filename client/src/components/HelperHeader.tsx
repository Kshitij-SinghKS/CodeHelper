import { Share2Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Save } from 'lucide-react';

const HelperHeader = () => {
  return (
    <div className="__helper_header h-[50px] text-white bg-black p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1 ">
        <Button variant="success" className="flex justify-center items-center gap-2"><Save size={16}/>Save</Button>
        <Button variant ="secondary" className="flex justify-center items-center gap-2"> <Share2Icon/>Share</Button>
      </div>
    </div>
  );
};

export default HelperHeader;
