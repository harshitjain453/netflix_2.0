
export const IconButton = ({ Icon, children, className }) => (
    <button className={`flex items-center px-12 py-4 text-xl rounded-md hover:bg-opacity-80 ${className}`}>
      <Icon className="mr-2" size={24} />
      <span>{children}</span>
    </button>
  );