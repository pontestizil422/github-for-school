const getRandomTsCode = () => {
  const code = `
    import React from 'react';

    interface Props {
      name: string;
      age: number;
    }

    function Greeting(props: Props) {
      return (
        <div>Hello, my name is {props.name} and I am {props.age} years old.</div>
      );
    }
  `;
  return code;
};
