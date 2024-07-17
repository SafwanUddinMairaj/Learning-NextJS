
export default function RootLayout({
  children,
}: 
Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <>
            <h1>INNER LAYOUT ITEM</h1>
            {children}
    </>

  );
}
