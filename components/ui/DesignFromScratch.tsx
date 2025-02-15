import React, { useEffect, useState } from 'react';
import { useCanvasStore } from '@/hooks/useCanvasStore';
import { useSvgStore } from '@/hooks/useSvgStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { Label } from "./shadcn/label";
import FontFamily from "./FontFamily";
import { Button } from "./shadcn/Button";
import { useProductStore } from '@/hooks/useProductStore';

const DesignFromScratch = () => {
  const { addText, addImage, updateSelectedObject, canvast, setCanvasType } = useCanvasStore();
  const [textValue, setTextValue] = useState("");
  const { category, additional } = useProductStore()
  const [textColor, setTextColor] = useState("#000000");
  const { setSelectedImage, font } = useSvgStore();
  const [value, setValue] = useState('front');

  useEffect(() => {
    setValue(canvast);
  }, [canvast]);

  const handleAddText = () => {
    setSelectedImage(true);
    addText(canvast, textValue, { fill: textColor, left: 40, top: 10 });
    setTextValue("");
  };

  const handleAddImage = (url: string) => {
    setSelectedImage(true);
    addImage(canvast, url, { left: 40, top: 10 });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(true);
    setTextColor(e.target.value);
    updateSelectedObject(canvast, { fill: e.target.value });
  };


  return (
    <Tabs defaultValue={value} className="w-full py-2 font-medium bg-white">
      <TabsList>
        <TabsTrigger 
          value="front" 
          onClick={() => setCanvasType('front')} 
          className="text-md"
        >
          {category === "Wristbands" ? "Front Message" : "Front Design"}
        </TabsTrigger>
        {category !== "Badges" && !additional.includes('Backpacks') ?
          <TabsTrigger 
            value="back" 
            onClick={() => setCanvasType('back')} 
            className="text-md"
          >
            {category === "Wristbands" ? "Back Message" : "Back Design"}
          </TabsTrigger> : ('')
        }
      </TabsList>

      <TabsContent value="front" className="md:px-4 px-2 ">
        {/* Front Design Tools */}
        <div className="w-full flex gap-4 p-2 h-full">
          <FontFamily />
          <div className="flex flex-col justify-between items-center">
            <Label htmlFor="font" className="text-md font-semibold">Color</Label>
            <input
              type="color"
              className='bg-slate-200 rounded-sm border-0 h-[55%]'
              value={textColor}
              onChange={handleColorChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <Label htmlFor="text" className="text-md">Enter Text</Label>
          <Textarea
            className="border rounded-md p-2"
            name="text"
            value={textValue}
            onChange={(e) => {
              setSelectedImage(true);
              setTextValue(e.target.value);
            }}
          />
        </div>

        <div className="w-full flex items-end justify-end">
          <Button onClick={handleAddText} className='2xl:text-base md:text-sm text-sm md:px-2 md:py-1'>
            Add New Text
          </Button>
        </div>
        <hr className='mt-2'></hr>
        <div className="px-2 py-3 gap-5 flex flex-col">
          <h5 className='font-semibold'>Upload Image to Design</h5>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.result) {
                    handleAddImage(reader.result as string);
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
            className='text-sm'
          />
        </div>
      </TabsContent>


      <TabsContent value="back" className="md:px-4 px-2 ">
        {/* Back Design Tools */}
        <div className="w-full flex gap-4 p-2 h-full">
          <FontFamily />
          <div className="flex flex-col justify-between items-center">
            <Label htmlFor="font" className="text-md font-semibold">Color</Label>
            <input
              type="color"
              className='bg-slate-200 rounded-sm border-0 h-[55%]'
              value={textColor}
              onChange={handleColorChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <Label htmlFor="text" className="text-md">Enter Text</Label>
          <Textarea
            className="border rounded-md p-2"
            name="text"
            value={textValue}
            onChange={(e) => {
              setSelectedImage(true);
              setTextValue(e.target.value);
            }}
          />
        </div>

        <div className="w-full flex items-end justify-end mb-4">
          <Button onClick={handleAddText} className='2xl:text-base md:text-sm text-xs md:px-2 md:py-1 '>
            Add New Text
          </Button>
        </div>

        <div className="px-4 md:py-3 py-4 flex flex-col">
          <h5 className='font-semibold'>Upload Image to Design</h5>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.result) {
                    handleAddImage(reader.result as string);
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
            className='text-sm'
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DesignFromScratch;
