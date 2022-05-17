import { SampleSchema } from '../data/schema-array-simple'
import { build } from '../../src/json-doc/builder'

describe('定义包含数组，数组中项目为简单类型，生成表单节点', () => {
  it('生成表单节点', () => {
    const editDoc = { additionalName: ['alice', 'bob'] }
    const fieldNames: string[] = []
    build(
      {
        schema: SampleSchema,
        editDoc,
        onMessage: (msg: string) => {
          console.log(msg)
        },
      },
      fieldNames
    )
    expect(fieldNames).toHaveLength(7)
    expect(fieldNames[0]).toBe('experiences[1].time')
    expect(fieldNames[1]).toBe('experiences[0].time')
    expect(fieldNames[2]).toBe('experiences[1].content')
    expect(fieldNames[3]).toBe('experiences[0].content')
    expect(fieldNames[4]).toBe('experiences[1]')
    expect(fieldNames[5]).toBe('experiences[0]')
    expect(fieldNames[6]).toBe('experiences')
  })
})
