import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
      <Link href="/" className=" text-blue-500 hover:text-blue-600"><u>Return Home</u></Link>
    </div>
  );
}
