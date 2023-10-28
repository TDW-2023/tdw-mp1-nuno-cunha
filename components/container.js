export default function Container({ children }) {
  return (
    <div role="div_container" className="container mx-auto px-5">
      {children}
    </div>
  );
}
