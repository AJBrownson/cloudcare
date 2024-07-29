export default function RegisterForm() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">User ID</label>
          <input
            type="text"
            placeholder="Enter User ID"
            className="border border-[#DEDCD3] rounded-lg p-2 w-[606px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter valid email"
            className="border border-[#DEDCD3] rounded-lg p-2 w-[606px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-[#DEDCD3] rounded-lg p-2 w-[606px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-[#DEDCD3] rounded-lg p-2 w-[606px]"
          />
        </div>
      </form>
    </main>
  );
}
