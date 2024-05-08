import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"


const RenderCode = () => {
    const fullCode = useSelector((state:RootState) => state.CompilerSlice.fullCode)
    const combinedCode = `
    <html>
      <head>
        <style>
          ${fullCode.css}
        </style>
      </head>
      <body>
        ${fullCode.html}
        <script>
          ${fullCode.javascript}
        </script>
      </body>
    `;

    const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(combinedCode)}`
  return (
    <div className="bg-white h-[calc(100dvh-60px)]">
      <iframe src={iframeCode} className="w-full h-full"/>
    </div>
  )
}

export default RenderCode
