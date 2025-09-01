const AdminContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f1f3f6] p-4">
      <div className="max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
};

export default AdminContainer;
