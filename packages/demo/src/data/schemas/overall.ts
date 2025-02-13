export const SampleSchema = {
  $id: 'https://example.com/card.schema.json',
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  description: '基本示例',
  type: 'object',
  properties: {
    name: {
      title: '姓名',
      type: 'string',
    },
    nickname: {
      title: '昵称',
      type: 'string',
    },
    additionalName: {
      title: '其他名称（基础类型数组）',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    experiences: {
      title: '经历（对象类型数组）',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          time: {
            title: '时间',
            type: 'string',
          },
          content: {
            title: '内容',
            type: 'string',
          },
        },
      },
    },
    gender: {
      title: '性别（单选框）',
      type: 'string',
      oneOf: [
        {
          label: '男',
          value: 'male',
        },
        {
          label: '女',
          value: 'female',
        },
      ],
    },
    age: {
      title: '年龄（性别为男才出现）',
      type: 'string',
    },
    activities: {
      title: '活动（根据性别关联选项）',
      type: 'string',
      required: false,
      enum: [
        {
          label: '购物',
          value: 'a',
          group: 'v1',
        },
        {
          label: '美容',
          value: 'b',
          group: 'v1',
        },
        {
          label: '游戏',
          value: 'c',
          group: 'v2',
        },
        {
          label: '打牌',
          value: 'd',
          group: 'v2',
        },
      ],
      enumGroups: [
        {
          id: 'v1',
          label: '分组1',
          assocEnum: {
            property: 'gender',
            value: 'female',
          },
        },
        {
          id: 'v2',
          label: '分组2',
          assocEnum: {
            property: 'gender',
            value: 'male',
          },
        },
      ],
    },
    hobbies: {
      title: '爱好（多选框）',
      type: 'string',
      anyOf: [
        {
          label: '美食',
          value: 'food',
        },
        {
          label: '读书',
          value: 'book',
        },
        {
          label: '电影',
          value: 'film',
        },
        {
          label: '旅游',
          value: 'trip',
        },
      ],
    },
    agree: {
      title: '同意？（布尔）',
      type: 'boolean',
      required: true,
    },
    bday: {
      title: '生日（日期）',
      type: 'string',
      format: 'dateTime',
    },
    areaCode: {
      title: '区号（选项）',
      type: 'string',
      enum: [
        {
          label: '010',
          value: '010',
        },
        {
          label: '029',
          value: '029',
        },
      ],
    },
    city: {
      title: '城市（根据选择的区号通过API获取值）',
      type: 'string',
    },
    tel: {
      title: '电话（对象）',
      type: 'object',
      properties: {
        areaCode: {
          title: '区号',
          type: 'string',
        },
        phoneNumber: {
          title: '号码',
          type: 'string',
        },
      },
    },
    org: {
      title: '组织（可扩展对象）',
      type: 'object',
      properties: {
        name: {
          title: '组织名称',
          type: 'string',
        },
      },
      patternProperties: {
        '.*': {
          title: '扩展属性',
          type: 'string',
        },
      },
    },
    files: {
      type: 'array',
      title: '证明文件',
      items: {
        type: 'object',
        format: 'file',
        properties: {
          name: {
            title: '名字',
            type: 'string',
          },
          url: {
            title: '地址',
            type: 'string',
          },
        },
        formatAttrs: {
          accept: 'png,jpeg',
          size: '1',
          limit: 1,
        },
      },
      attachment: [
        {
          name: '1.jpg',
          url: 'http://www.baidu.com',
        },
        {
          name: '2.jpg',
          url: 'http://www.baidu.com',
        },
      ],
    },
    config: {
      title: '配置（JSON）',
      type: 'json',
    },
  },
  dependencies: {
    age: {
      dependencyRules: {
        '1': {
          rules: [{ property: 'gender', value: 'male' }],
          operator: 'and',
        },
      },
      operator: 'or',
    },
  },
  eventDependencies: {
    city: {
      rule: {
        url: 'http://tms-vue3-kit/areaCode/city',
        params: ['areaCode'],
        type: 'v1',
      },
    },
  },
}

export const SampleData = { name: 'overall' }
