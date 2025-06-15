import { useEffect } from "react";

interface Props {
  message: string;
  setMessage: (s: string) => void;
}

export default function ErrorMessage({ message, setMessage }: Props) {
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  });
  return <span className="absolute bg-red-600 p-2 text-white text-sm font-medium">{message}</span>;
}
