import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Post Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The post you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/">Return to Home</Link>
    </div>
  );
}
