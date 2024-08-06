// import React, { useState, useRef, useEffect, ChangeEvent } from "react";

// const DebouncedInput: React.FC = () => {
//   const [value, setValue] = useState<string>("");
//   const [debouncedValue, setDebouncedValue] = useState<string>("");
//   const timeoutRef = useRef(null);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);

//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       setDebouncedValue(event.target.value);
//     }, 300);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <p>Debounced Value: {debouncedValue}</p>
//     </div>
//   );
// };

// export default DebouncedInput;
