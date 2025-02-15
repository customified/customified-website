import React from 'react';
import { useSvgStore } from "@/hooks/useSvgStore";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import dynamic from 'next/dynamic';
import ImageUpload from '@/components/ui/image-upload';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/shadcn/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Product } from '@/types';
import DesignFromScratch from './DesignFromScratch';
import { useProductStore } from '@/hooks/useProductStore';

const FontFamily = dynamic(() => import('./FontFamily'), { ssr: false });

interface CustomFontProps {
  data: Product;
}

const CustomFont: React.FC<CustomFontProps> = ({ data }) => {
  const formSchema = z.object({
    imageUrl: z.string().min(1),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: '',
    },
  });

  const { setText, setSelectedImage, setTextColor } = useSvgStore();
  const { setFrontDesignUrl, setBackDesignUrl } = useProductStore();

  const handleFrontImageUploadChange = (url: string) => {
    form.setValue('imageUrl', url);
    setFrontDesignUrl(url);
  };

  const handleBackImageUploadChange = (url: string) => {
    form.setValue('imageUrl', url);
    setBackDesignUrl(url);
  };

  return (
    <Tabs defaultValue={
      data.category.name === 'Lanyards' 
        ? data.additionalCategories?.includes('Accessories') 
          ? "Upload Design" 
          : "Enter Message" 
        : "Design From Scratch"
    }
     className="w-full py-5 text-sm md:text-base font-medium">
      <TabsList className="bg-white ">
        {(data.category.name === 'Lanyards' && !(data.additionalCategories?.includes('Accessories')) ) && (
          <TabsTrigger value="Enter Message" className=" md:text-lg">Enter Message</TabsTrigger>
        )}
        {data.category.name !== 'Lanyards' && (
          <TabsTrigger value="Design From Scratch" className="md:text-lg">Design From Scratch</TabsTrigger>
        )}
        <TabsTrigger value="Upload Design" className="md:text-lg">Upload Design</TabsTrigger>
      </TabsList>

      {(data.category.name === 'Lanyards' && !(data.additionalCategories?.includes('Accessories')) ) ? (
        <TabsContent value="Enter Message" className="md:p-5 p-2 flex flex-col gap-4">
          <div className="flex justify-between w-full gap-4">
            <div className="flex flex-col gap-3 w-[60%]">
              <Label htmlFor="text" className="text-md font-semibold">Your Message Here</Label>
              <Input
                placeholder="Enter Text here"
                className="text-md w-[100%]"
                name="text"
                onChange={(e) => {
                  setSelectedImage(true);
                  setText(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-3 w-[30%]">
              <FontFamily />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="font" className="text-md font-semibold">Choose Imprint Color</Label>
            <input
              type="color"
              className='bg-slate-400 rounded-sm border-0'
              onChange={(e) => {
                setSelectedImage(true);
                setTextColor(e.target.value);
              }}
            />
          </div>
        </TabsContent>
      ) : ('')}

      {data.category.name !== 'Lanyards' ? (
        <TabsContent value="Design From Scratch" className="md:px-5 px-1 flex flex-col gap-4">
          <DesignFromScratch />
        </TabsContent>
      ) : ('')}

      <TabsContent value="Upload Design" className='md:px-6 px-2'>
        <Tabs defaultValue="front" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="front">
              {data.category.name === "Wristbands" ? "Front Message" : "Front Design"}
            </TabsTrigger>
            {data.category.name !== "Badges" && !data.additionalCategories?.includes('Backpacks') ?
              <TabsTrigger value="back">
                {data.category.name === "Wristbands" ? "Back Message" : "Back Design"}
              </TabsTrigger> 
              : ('')  
            }
          </TabsList>

          <TabsContent value="front">
            <Form {...form}>
              <form onSubmit={() => { }} className='w-full md:pl-6 pl-4'>
                <FormField
                  name='imageUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ImageUpload
                          value={field.value ? [field.value] : []}
                          onChange={handleFrontImageUploadChange}
                          onRemove={() => handleFrontImageUploadChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </TabsContent>

          {/* back Side Design Upload */}
          <TabsContent value="back">
            <Form {...form}>
              <form onSubmit={() => { }} className='w-full pl-4'>
                <FormField
                  name='imageUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ImageUpload
                          value={field.value ? [field.value] : []}
                          onChange={handleBackImageUploadChange}
                          onRemove={() => handleBackImageUploadChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </TabsContent>
        </Tabs>

      </TabsContent>
    </Tabs>
  );
};

export default CustomFont;
