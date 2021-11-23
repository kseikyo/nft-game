export const Container: React.FC = ({ children }) => {
  return (
    <div className="h-full bg-gray-900 flex flex-col justify-between">
      {children}
    </div>
  );
};
