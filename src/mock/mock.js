const Mock = require("mockjs");
const domain = "http://mockjs.com/api";

const postData = () => {
  return [
    {
      title: "1000XCN,0.006挂单,0.008借入价，0.007市场价",
      key: "0-0",
      children: [
        {
          title: "+20000XYZ，-120XCN，0.01挂单，0.008市场价",
          key: "0-0-0",
          children: [
            {
              title: "50XCN，-5000XYZ，0.008挂单，0.009市场价",
              key: "0-0-0-0"
            },
            {
              title: "+100XCN，-10000XYZ，0.008挂单，0.009市场价",
              key: "0-0-0-1"
            }
          ]
        },
        {
          title: "+5000XYZ，-30XCN，0.008挂单，0.007市场价",
          key: "0-0-1",
          children: [
            {
              title: "+40XCN，-5000XYZ，0.006挂单，0.007市场价",
              key: "0-0-1-0"
            }
          ]
        },
        {
          title: "+10000XYZ，-60XCN，0.008挂单，0.007市场价",
          key: "0-0-2",
          children: [
            {
              title: "+40XCN，-5000XYZ，0.006挂单，0.007市场价",
              key: "0-0-2-0",
              children: [
                {
                  title: "+1000XYZ，-6XCN，0.008挂单，0.0075市场价",
                  key: "0-0-2-0-0"
                },
                {
                  title: "+2000XYZ，-12XCN，0.008挂单，0.007市场价",
                  key: "0-0-2-0-1"
                },
                {
                  title: "+1000XYZ，-6XCN，0.009挂单，0.008市场价",
                  key: "0-0-2-0-2"
                }
              ]
            },
            {
              title: "+8XCN，-1000XYZ，0.004挂单，0.007市场价",
              key: "0-0-2-1",
              children: [
                {
                  title: "+1000XYZ，-6XCN，0.008挂单，0.006市场价",
                  key: "0-0-2-1-0"
                },
                {
                  title: "+333XYZ，-2XCN，0.008挂单，0.007市场价",
                  key: "0-0-2-1-1"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
};
Mock.mock(`${domain}/dashboard/chart`, "get", postData());
