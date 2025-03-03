export function Button({ children, asChild, variant, ...props }) {
  const Component = asChild ? 'span' : 'button';
  const className = variant === 'outline' ? 'border border-white' : 'bg-blue-600 text-white';

  return (
    <Component className={`px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </Component>
  );
}