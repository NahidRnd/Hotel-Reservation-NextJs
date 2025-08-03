export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      // <div className="flex justify-center items-center min-h-screen w-full">
      <div className="bg-[url(/login.jpg)] bg-cover h-screen w-full text-secondary flex items-center">
            {children}
      </div>
    );
}