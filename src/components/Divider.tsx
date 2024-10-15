import Image from "next/image";

export default function Divider() {
  return (
    <div className="flex justify-center">
      <Image src="/divider.png" alt="" height={300} width={300} />
    </div>
  );
}
