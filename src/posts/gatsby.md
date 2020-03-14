---
title: "Gatsby를 사용하는 방법"
date: "2019-04-04"
---

## 블로그 테스트

`Gatsby`를 이용하여 블로그를 만들기 위해서는 다음과 같은 사전지식이 필요하다.
국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지 아니한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.

헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다.

대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다.

### 블로그를 만들기 위해 알아야 할 것들

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
.class {
  opacity: 0;
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

## Helllo

```
text
```

### wolrd

#### test

### world

제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.

모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 모든 국민은 거주·이전의 자유를 가진다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다.

헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.
