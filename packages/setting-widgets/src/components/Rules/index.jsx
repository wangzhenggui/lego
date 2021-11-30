import Rule from './Rule';


// const includes = (array, type) => {
//   if (Array.isArray(array) && array.length > 0) {
//     const filterArr = array.filter(a => a.name === type)
//     if (filterArr.length > 0) {
//       return true
//     }
//   }
//   return false
// }


const Rules = (props) => {
  const { value = [], onChange, schema } = props;
  const handleChange = (checked, type) => {
    if (checked) {
      if (type === 'required') {
        onChange([...value, {
          required: true,
          message: '',
        }])
      } else if (type !== 'validator') {
        onChange([...value, {
          [type]: null,
          message: '',
          type: schema?.props?.rules[type]['type'],
        }])
      } else {
        // 关于表达式
        onChange([...value, {
          [type]: null,
          message: '',
          type: schema?.props?.rules[type]['type'],
        }])
      }
    } else {
      const newValue = value.filter(v => !v.hasOwnProperty(type))
      onChange(newValue)
    }
  }

  const handleChangeProps = (currentValue, key, val) => {
    const newValue = value.filter(v => v.type !== currentValue.type)
    newValue.push({
      ...currentValue,
      [key]: val
    })
    onChange(newValue)
  }

  return (
    <div>
      {
        Object.keys(schema?.props?.rules)
        .map(rule => {
          const currentValue = value.filter(v => v.hasOwnProperty(rule))
          return (
            <Rule
              type={rule}
              label={schema?.props?.rules[rule]['label']}
              handleChange={handleChange}
              handleChangeProps={handleChangeProps}
              checked={currentValue.length > 0}
              currentValue={currentValue.length > 0 ? currentValue[0] : {}}
            />
          )
        })
      }
    </div>
  )
}


export default Rules;
