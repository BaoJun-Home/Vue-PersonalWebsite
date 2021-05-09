import Mock from "mockjs";

Mock.mock("/api/project", "get", {
  code: 0,
  msg: "",
  "data|5-10": [
    {
      id: "@guid",
      name: "@ctitle(5, 10)",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|2-3": ["@cparagraph(3, 5)"],
      thumb: "@image(200x150, @color, @color, png, @natural)",
      "order|+1": 1,
    },
  ],
});
