import  { useEffect, useRef } from 'react';

function Ref() {
  const emailRef = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Delay focus until DOM is ready (handles React Strict Mode too)
    
      emailRef.current?.focus();
   
  }, []);

  function focusRequiredInput() {
    console.log("Email:", emailRef.current?.value);
    console.log("Name:", name.current?.value);
    console.log("Password:", password.current?.value);
    console.log("Phone:", phone.current?.value);
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Ref Topic</h2>
      <div className="flex flex-col gap-2 max-w-sm">
        <label>Email</label>
        <input className="border border-gray-300 p-2 rounded" type="email" ref={emailRef} />

        <label>Name</label>
        <input className="border border-gray-300 p-2 rounded" type="text" ref={name} />

        <label>Password</label>
        <input className="border border-gray-300 p-2 rounded" type="password" ref={password} />

        <label>Phone</label>
        <input className="border border-gray-300 p-2 rounded" type="tel" ref={phone} />

        <button
          onClick={focusRequiredInput}
          className="bg-blue-500 text-white rounded p-2 mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Ref;
