import { Slider, Space } from 'antd';

const chunk = (min, max, step) => {
  const marks = {}
  for (let i = min; i <= max; i++) {
    if (i % step === 0) {
      marks[i] = i
    }
  }
  return marks;
}

//TODO: 交互换一下 换成滑块交互
const Gutter = ({ value = [], onChange }) => {
  const marks = chunk(0, 48, 8)

  const handleChange = (index, val = 0) => {
    const [start, end] = value
    if (index === 0) {
      onChange([val, end])
    } else {
      onChange([start, val])
    }
  }
  return (
    <Space direction="vertical" style={{width: '200px'}}>
      <Slider min={0} max={48} step={8} marks={marks} dots value={value[0]} onChange={value => handleChange(0, value)}/>
      <Slider min={0} max={48} step={8} marks={marks} dots value={value[1]} onChange={value => handleChange(1, value)}/>
    </Space>
    
  )
}

export default Gutter;
