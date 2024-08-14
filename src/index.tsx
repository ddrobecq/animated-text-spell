import { useEffect, useState,  } from "react";
import React from "react";

type AnimatedTextProps = {
    text: string;
    frequency?: number;
    inc?: number;
}

export default function AnimatedText (props: AnimatedTextProps) {
    const text = props.text;
    const frequency = props.frequency || 100;
    const inc = props.inc || 1;
    const [ textToDisplay, setTextToDisplay ] = useState<string>('');
    const [ counter, setCounter ] = useState<number>(0);
    let timer: number;

    if (text) {
        timer = setTimeout(increment, frequency);
    }
  
    function increment () {
      setCounter (counter + inc);
      if (counter >= text.length) {
        clearTimeout(timer);
      }
    }
  
    useEffect (() => {
        if (text) {
            const sub = text.substring(0, counter);
            setTextToDisplay (sub);
        }
    }, [counter, text]);

    return (<>{textToDisplay}</>);
  }
  
  