import React, { useState, useEffect } from 'react';
import Select, { MenuListProps } from 'react-select';
import { FixedSizeList as List } from 'react-window';
import WebFont from 'webfontloader';
import { Label } from './shadcn/label';
import axios from 'axios';
import { useSvgStore } from '@/hooks/useSvgStore';
import { useCanvasStore } from '@/hooks/useCanvasStore';

type FontOption = {
  value: string;
  label: string;
};

type CustomOptionProps = {
  index: number;
  style: React.CSSProperties;
  data: { value: string; label: string }[];
};

const FontFamily = () => {
  const { setSelectedImage, setFont } = useSvgStore();
  const { updateSelectedFont, canvast } = useCanvasStore();

  const [fonts, setFonts] = useState<string[]>([]);
  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY}`)
        .then(response => {
          const fontFamilies = response.data.items.map((font: { family: string }) => font.family);
          setFonts(fontFamilies);
          setSelectedFont(fontFamilies[0]);
          loadFont(fontFamilies[0]);
        })
        .catch(error => console.error('Error fetching fonts:', error));
    }
  }, []);

  const loadFont = (fontFamily: string) => {
    if (typeof window !== 'undefined') {
      WebFont.load({
        google: {
          families: [fontFamily],
        },
      });
    }
  };

  const handleFontSelect = (selectedOption: FontOption) => {
    setSelectedImage(true);
    setSelectedFont(selectedOption.value);
    loadFont(selectedOption.value);
    setFont(selectedOption.value);
    updateSelectedFont(canvast, selectedOption.value);
  };

  const DropdownIndicator = () => null;

  const CustomOption: React.FC<CustomOptionProps> = ({ index, style, data }) => (
    <div
      style={{ ...style, fontFamily: data[index].value, padding: '10px' }}
      onClick={() => handleFontSelect(data[index])}
      className="cursor-pointer hover:bg-gray-200"
    >
      {data[index].label}
    </div>
  );

  const VirtualizedMenuList: React.FC<MenuListProps<FontOption, false>> = (props) => {
    const { options, getValue } = props;
    const height = 35 * 5;

    const [value] = getValue();
    const initialOffset = options.indexOf(value) * 35;

    return (
      <List
        height={height}
        itemCount={options.length}
        itemSize={35}
        initialScrollOffset={initialOffset}
        width="100%"
        className='scrollbar-none'
      >
        {({ index, style }) => <CustomOption index={index} style={style} data={options as any[]} />}
      </List>
    );
  };

  const fontOptions = fonts.map(font => ({ value: font, label: font }));

  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor="font" className="md:text-base text-sm font-semibold">Select Font</Label>
      <Select
        options={fontOptions}
        value={fontOptions.find(option => option.value === selectedFont)}
        onChange={(selectedOption) => handleFontSelect(selectedOption as { value: string; label: string })}
        components={{ DropdownIndicator, MenuList: VirtualizedMenuList }}
        styles={{
          control: (provided) => ({
            ...provided,
            fontFamily: selectedFont || 'inherit',
            fontSize: '16px',
          }),
          option: (provided, state) => ({
            ...provided,
            fontFamily: state.data.value,
            fontSize: '16px',
          }),
        }}
      />
    </div>
  );
};

export default FontFamily;
