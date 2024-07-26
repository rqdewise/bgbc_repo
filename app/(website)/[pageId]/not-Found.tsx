import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  const headersList = headers();
  const referer = headersList.get('referer')

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cal text-4xl">{referer} 404</h1>
      <Image
        alt="missing site"
        src="https://illustrations.popsy.co/gray/timed-out-error.svg"
        width={400}
        height={400}
      />
      <p className="text-lg text-stone-500">
          <Link href="/">Back to home </Link>
      </p>
    </div>
  );
}
