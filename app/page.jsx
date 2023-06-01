import Link from "next/link";

export const metadata = {
  title: "CHECK TITLE TAG ONLY CHECK CHECK ",
  description:
    "The growing convergence of the designer and programmer roles by way of React",
  openGraph: {
    title: "Pure UI",
    description:
      "The growing convergence of the designer and programmer roles by way of React",
    images: [{ url: "/next.svg" }],
  },
};


export default function Home() {
  return (
    <>
      <Link href={`/data`}>Go</Link>
    </>
  );
}
