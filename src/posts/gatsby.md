---
title: "Gatsby를 사용하는 방법"
date: "2019-04-04"
---

Gatsby를 이용하여 블로그를 만들기 위해서는 다음과 같은 사전지식이 필요하다.

## 블로그를 만들기 위해 알아야 할 것들

1. Gatsby & Netlify
2. React
3. GraphQL

```jsx
const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />;
};
export default Head;
Value = [];
}
```


```javascript
const funcName = ({ props }) => {
  return "Hello world";
};
```

```html
<div></div>
```

```css
.class{
  opacity:0;
}
```

```bash
cd dir
```

```python
def funcName:
  hello();
```

```typescript
$("#navigation")
  .css("background", "red")
  .height(300)
  .fadeIn(200);

```

```json
{
  "hello": "world"
}
```