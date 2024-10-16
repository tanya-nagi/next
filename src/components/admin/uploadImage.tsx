/* eslint-disable @next/next/no-img-element */
import { useState, ChangeEvent } from "react";
import { Image } from "@/types/admin/api/image";
import { FilledBtn } from "@components/admin";
import { baseURL } from "@api-integration/ApiClient";
import { useImagesServices } from "@services/images";
import { toast } from "react-toastify";

export default function UploadAndSelect({
  resolver,
}: {
  resolver: (arg: string) => Promise<void>;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState<Image | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { addImages, isLoading } = useImagesServices();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("images", selectedFile as Blob);
    await addImages(formData, {
      onSuccess: () => {
        setImage(null);
        setIsSuccess(true);
        setPreviewUrl(null);
        toast.success("Image has been uploaded successfully");
      },
      onError: (error) => {
        setError(error);
      },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("File size should be less than 2MB.");
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select any image");
    } else {
      uploadImage();
    }
  };

  return (
    <form className="min-h-[300px]" onSubmit={handleSubmit}>
      <label
        htmlFor="authorProfile"
        className="grid gap-1 w-full max-w-3xl text-base font-semibold"
      >
        Cover Image:
        <input
          type="file"
          placeholder="No file chosen (Recommended Dimensions: 800x600 Max fil size: 2MB Upload)"
          className={`${
            error !== ""
              ? "border-red border-opacity-50"
              : "border-gray-400 border-opacity-40"
          } 
          relative m-0 block w-full tracking-wide focus:outline-none min-w-0 flex-auto rounded-sm 
                bg-clip-padding px-3 py-2 border-2 border-gray border-opacity-30 text-base font-normal transition 
                duration-300 ease-in-out file:-mx-3 file:-my-12 file:overflow-hidden file:rounded-none file:border-0 
                file:border-solid file:border-inherit file:px-3 file:py-2 mt-1 file:transition file:duration-150 
                file:ease-in-out file:[margin-inline-end:0.75rem] file:  focus:border-primary cursor-pointer 
                focus:shadow-te-primary file:bg-neutral-200"
          accept="image/png, image/jpeg, image/jpg`}
          onChange={handleChange}
        />
        {error !== "" && (
          <p
            className="text-red text-opacity-70 mt-1 font-normal flex flex-nowrap items-center gap-1 
        text-base"
          >
            {error}
          </p>
        )}
      </label>
      {previewUrl && (
        <div className="h-52 border-gray border-opacity-20 w-52 oveflow-hidden bg-white border rounded-xl mt-10">
          <img
            src={previewUrl}
            alt="Preview"
            className="h-full w-full object-center object-cover p-2"
          />
        </div>
      )}
      <div className="mt-6 flex flex-nowrap gap-4"></div>
      {isSuccess ? (
        <FilledBtn
          text="Proceed"
          isGrayscale={false}
          isLoading={isLoading}
          isDisabled={isLoading}
          callback={() => {
            const url = image?.url;
            resolver(`${url}`);
          }}
        />
      ) : (
        <FilledBtn
          isGrayscale={false}
          type="submit"
          text="Upload"
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      )}
    </form>
  );
}
