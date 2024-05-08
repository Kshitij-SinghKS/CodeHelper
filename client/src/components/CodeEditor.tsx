import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage, langNames} from '@uiw/codemirror-extensions-langs';

const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    console.log("langNames:", langNames),
    <CodeMirror 
      value={value}
      height="100vh"
      extensions={[loadLanguage('javascript')!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })}
    />
  );
};

export default CodeEditor;
