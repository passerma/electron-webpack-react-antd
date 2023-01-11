// src/app.jsx

import React, { useRef } from "react"
import { Button } from 'antd';
import { join } from 'path'
import { readFileSync } from 'fs'

export default () => {
  const div = useRef(null)

  const get = () => {
    // 使用node api读取项目package.json
    const path = join(__dirname, '../package.json')
    const data = readFileSync(path, 'UTF-8').toString()
    div.current.innerText = data
  }

  return <div>
    <Button type="primary" onClick={get}>按钮</Button>
    <div ref={div}></div>
  </div>;
}