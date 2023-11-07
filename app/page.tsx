import Image from "next/image";
import foto1 from "@/public/assets/Sin título-1-01.png";
import foto2 from "@/public/assets/Sin título-1-02.png";
import foto3 from "@/public/assets/Sin título-1-03.png";
import foto4 from "@/public/assets/Sin título-1-04.png";
import foto5 from "@/public/assets/Sin título-1-05.png";

import foto8 from "@/public/assets/Sin título-1-08.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-0 items-center justify-between select-none bg-white">
      <Image src={foto1} alt="" width={0} height={0} className="w-screen" />

      <Image src={foto3} alt="" width={0} height={0} className="w-screen" />
      <Image src={foto4} alt="" width={0} height={0} className="w-screen" />
      <Image src={foto5} alt="" width={0} height={0} className="w-screen" />

      <Image src={foto8} alt="" width={0} height={0} className="w-screen" />
    </main>
  );
}
