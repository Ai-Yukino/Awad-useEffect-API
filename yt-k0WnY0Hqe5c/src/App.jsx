// 🍵Basic boilerplate☕
// import React, { useState, useEffect } from "react";

// import "./App.css";

// const useFetch = () => {};

// export default () => {
//   useEffect(() => {});

//   return <></>;
// };

// 🍂Example 4🍃
// ⌚5m56s
// 📝Custom fetch() hook

import React, { useState, useEffect } from "react";

import "./App.css";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    })();
  }, []);

  return { data, loading };
};

export default () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://api.randomuser.me");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
    </div>
  );
};

// 🍂Example 3🍃
// ⌚4m50s
// 📝Loading while fetching

// import React, { useState, useEffect } from "react";

// import "./App.css";

// export default () => {
//   const [count, setCount] = useState(0);
//   const [person, setPerson] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const response = await fetch("https://api.randomuser.me/");
//       const data = await response.json();
//       const [item] = data.results;
//       setPerson(item);
//       setLoading(false);
//     })();
//   }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       {loading ? <div>...loading</div> : <div>{person.name.first}</div>}
//     </div>
//   );
// };

// 🍂Example 2.2🍃
// ⌚4m01s
// 📝Create infinite loop

// import React, { useState, useEffect } from "react";

// import "./App.css";

// export default () => {
//   const [count, setCount] = useState(0);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     // Log time when useEffect is called
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
//     console.log(`useEffect() call time: ${ Date.now()}\n`);
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;

//     (async () => {
//       const response = await fetch("https://api.randomuser.me/");
//       const data = await response.json();
//       const [item] = data.results;
//       setPerson(item);
//     })();
//   }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button
//         onClick={() => {
//           console.log(`onClick()/setCount() call time: ${Date.now()}\n`);
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//       <div>{person && <div>{person.name.first}</div>}</div>
//     </div>
//   );
// };

// 🍂Example 2.1🍃
// 📝Nested async function inside useEffect() parameter function

// import React, { useState, useEffect } from "react";

// import "./App.css";

// export default () => {
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     // The function is declared but not called
//     // We use IIFE notation to call it
//     // 🔗https://developer.mozilla.org/en-US/docs/Glossary/IIFE
//     (async () => {
//       const response = await fetch("https://api.randomuser.me/");
//       const data = await response.json();
//       const [item] = data.results;
//       setPerson(item);
//     })();
//   }, []);

//   return <div>{person && <div>{person.name.first}</div>}</div>;
// };

// 🍂Example 2🍃
// ⌚2m31s
// 📝fetch() API call
// 📝It's not recommended to directly make the function parameter
// of `useEffect()` into an asynchronous function:
// 🔗https://stackoverflow.com/a/53572588
// 🔗https://github.com/facebook/react/issues/14326
// Tl;Dr nest an async function inside
// the function parameter of useEffect()

// import React, { useState, useEffect } from "react";

// import "./App.css";

// export default () => {
//   const [person, setPerson] = useState(null);

//   useEffect(async () => {
//     const response = await fetch("https://api.randomuser.me/");
//     const data = await response.json();
//     const [item] = data.results;
//     setPerson(item);
//   }, []);

//   return <div>{person && <div>{person.name.first}</div>}</div>;
// };

// 🍂Example 1🍃
// ⌚0m0s
// 📝useEffect() and setState() call order

// import React, { useState, useEffect } from "react";

// import "./App.css";

// export default () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Log time when useEffect is called
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
//     console.log(`useEffect() call time: ${Date.now()}\n`);
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button
//         onClick={() => {
//           console.log(`onClick()/setCount() call time: ${Date.now()}\n`);
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };
