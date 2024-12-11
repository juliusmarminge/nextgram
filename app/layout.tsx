import './global.css';

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
};

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  );
}
