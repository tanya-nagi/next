import { ReactNode, useContext, useState, createContext } from "react";
import { Image } from "@/types/admin/api/image";

const initailImages: Image[] = [];

const imageContext = createContext({
  images: initailImages,
  setImages: (val: Image[]) => {},
});

export function ImageContextProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<Image[]>(initailImages);

  return (
    <imageContext.Provider value={{ images, setImages }}>
      {children}
    </imageContext.Provider>
  );
}

export const useImages = () => {
  const { images, setImages } = useContext(imageContext);
  return { images, setImages };
};
